import { render } from '@comark/html'
import { parse } from 'comark'
import { readdir, readFile, writeFile, mkdir, cp } from 'fs/promises'
import { join, relative } from 'path'
import { existsSync } from 'fs'

const ARTICLES = 'content/articles'
const STATIC = 'static'
const OUT = 'dist'
const SITE = 'https://scott-fryxell.github.io'
const DRAFTS = process.argv.includes('--drafts')
const RESUME_IMG = '/posters/Scott Fryxell @ Wednesday afternoon, March 4 - 1772667028251.svg'

const minor_words = new Set([
  'a', 'an', 'and', 'as', 'at', 'but', 'by', 'for', 'in',
  'nor', 'of', 'on', 'or', 'so', 'the', 'to', 'up', 'with', 'yet'
])

function title_case(str) {
  const words = str.split(' ')
  return words.map((word, i) => {
    if (i !== 0 && i !== words.length - 1 && minor_words.has(word.toLowerCase()))
      return word.toLowerCase()
    return word.charAt(0).toUpperCase() + word.slice(1)
  }).join(' ')
}

function format_date(str) {
  if (!str) return ''
  return new Date(`${str.split('T')[0]}T12:00:00Z`)
    .toLocaleDateString('en', { year: 'numeric', month: 'long', day: 'numeric' })
}

function shell(title, body, meta = {}) {
  const full_title = meta.root ? `${title} — Humanist Software Developer` : `${title} — Scott Fryxell`
  const description = meta.description || 'Humanist software developer in San Francisco — building tools that respect the people who use them.'
  const canonical = meta.url ? `${SITE}${meta.url}` : SITE
  const og_image = `${SITE}/posters/${encodeURIComponent(meta.img || RESUME_IMG.replace('/posters/', ''))}`
  const og_type = meta.type || 'website'
  return `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${full_title}</title>
  <meta name="description" content="${description}">
  <link rel="canonical" href="${canonical}">
  <meta property="og:site_name" content="Scott Fryxell">
  <meta property="og:type" content="${og_type}">
  <meta property="og:title" content="${full_title}">
  <meta property="og:description" content="${description}">
  <meta property="og:url" content="${canonical}">
  <meta property="og:image" content="${og_image}">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="${full_title}">
  <meta name="twitter:description" content="${description}">
  <meta name="twitter:image" content="${og_image}">
  <link rel="stylesheet" href="/style.css">
  <link rel="icon" type="image/svg+xml" href="/icons.svg">
  <link rel="apple-touch-icon" href="/192.png">
</head>
<body>
<main>
  <header>
    <div class="title-group">
      <h1><a href="/">Scott Fryxell</a></h1>
      <p class="subtitle">Humanist Software Developer</p>
    </div>
    <nav>
      <a href="/resume">Resume</a>
      <a href="https://realness.online/?from=blog">Thoughts</a>
    </nav>
  </header>
  ${body}
  <footer></footer>
</main>
</body>
</html>`
}

async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true })
  const files = []
  for (const entry of entries) {
    const full = join(dir, entry.name)
    if (entry.isDirectory()) files.push(...await walk(full))
    else if (entry.name.endsWith('.md')) files.push(full)
  }
  return files
}

const poster_sizes = {}

async function load_poster_sizes() {
  const dir = join(STATIC, 'posters')
  for (const name of await readdir(dir)) {
    if (!name.endsWith('.svg')) continue
    const svg = await readFile(join(dir, name), 'utf8')
    const box = svg.match(/viewBox="[\d.-]+ [\d.-]+ ([\d.]+) ([\d.]+)"/)
    if (box) poster_sizes[name] = { width: Number(box[1]), height: Number(box[2]) }
  }
}

function poster(data, title, heading = 'h2', href = null) {
  const size = poster_sizes[data.img]
  const ratio = size ? (size.width / size.height).toFixed(4) : null
  const focus = data.focus ? `; --focus: ${data.focus}` : ''
  const figure_style = ratio ? ` style="--ratio: ${ratio}${focus}"` : ''
  const img_attrs = size ? ` width="${size.width}" height="${size.height}"` : ''
  const headline = href ? `<a itemprop="url" href="${href}">${title}</a>` : title
  return `<figure${figure_style}>
      ${data.img ? `<img src="/posters/${data.img}"${img_attrs} alt="" loading="lazy">` : ''}
      <figcaption>
        <${heading} itemprop="headline">${headline}</${heading}>
        ${data.date ? `<time itemprop="datePublished" datetime="${data.date}">${format_date(data.date)}</time>` : ''}
      </figcaption>
    </figure>`
}

function strip_tags(html) {
  return html.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim()
}

async function build_article(file) {
  const src = await readFile(file, 'utf8')
  const { frontmatter: data } = await parse(src)
  const slug = relative(ARTICLES, file).replace(/\.md$/, '')
  const title = title_case(data.title || slug.split('/').pop().replace(/-/g, ' '))
  const draft = data.draft === true || data.draft === 'true'
  if (draft && !DRAFTS) return { slug, title, date: data.date, draft }
  const html = await render(src)
  const article = `<article itemscope itemtype="http://schema.org/BlogPosting">
    ${poster(data, title, 'h1')}
    <section itemprop="articleBody">${html}</section>
  </article>`
  const out = join(OUT, 'blog', slug, 'index.html')
  await mkdir(join(OUT, 'blog', slug), { recursive: true })
  const description = data.description || strip_tags(html).slice(0, 160).trim()
  await writeFile(out, shell(title, article, { url: `/blog/${slug}`, img: data.img, description, type: 'article' }))
  return { slug, title, date: data.date, img: data.img, focus: data.focus, draft, html }
}

async function build_index(articles) {
  const published = articles
    .filter(a => DRAFTS || !a.draft)
    .sort((a, b) => (b.date || '').localeCompare(a.date || ''))
  const items = published.map(a => `<article itemscope itemtype="http://schema.org/BlogPosting">
    <details>
      <summary>${poster(a, a.title, 'h2', `/blog/${a.slug}`)}</summary>
      <section itemprop="articleBody">${a.html}</section>
    </details>
  </article>`).join('\n')
  const latest = published.find(a => a.img)
  await writeFile(join(OUT, 'index.html'), shell('Scott Fryxell', `<section>${items}</section>`, { root: true, url: '/', img: latest?.img }))
}

async function build_resume() {
  const html = await readFile('resume.html', 'utf8')
  await mkdir(join(OUT, 'resume'), { recursive: true })
  const description = 'Software developer with 25+ years experience across the full range of craft — design, architecture, implementation, and delivery. Based in San Francisco.'
  await writeFile(join(OUT, 'resume', 'index.html'), shell('Resume', html, {
    url: '/resume',
    description,
    type: 'profile'
  }))
}

async function main() {
  await mkdir(OUT, { recursive: true })
  await cp(STATIC, OUT, { recursive: true }).catch(() => {})
  if (existsSync('style.css')) await cp('style.css', join(OUT, 'style.css'))

  await load_poster_sizes()
  const files = await walk(ARTICLES)
  const articles = await Promise.all(files.map(build_article))
  await build_index(articles)
  await build_resume()
  console.log(`built ${articles.length} articles`)
}

main()
