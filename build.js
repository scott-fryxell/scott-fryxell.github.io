import { render } from '@comark/html'
import { parse } from 'comark'
import { codeToHtml } from 'shiki'
import sharp from 'sharp'
import { readdir, readFile, writeFile, mkdir, cp } from 'fs/promises'
import { join, relative } from 'path'
import { existsSync, watch } from 'fs'

const ARTICLES = 'content/articles'
const STATIC = 'static'
const OUT = 'dist'
const SITE = 'https://scott-fryxell.github.io'
const DRAFTS = process.argv.includes('--drafts')
const WATCH = process.argv.includes('--watch')
const RESUME_IMG = '/posters/Scott Fryxell @ Wednesday afternoon, March 4 - 1772667028251.svg'
const OG_WIDTH = 1200
const OG_HEIGHT = 630

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

// dev only: poll the stamp the watcher writes, reload when the build changes
const live_reload = `<script>
    let stamp = null
    setInterval(async () => {
      const next = await fetch('/build-stamp.txt', { cache: 'no-store' })
        .then(response => response.text())
        .catch(() => null)
      if (!next) return
      if (stamp && next !== stamp) location.reload()
      stamp = next
    }, 400)
  </script>`

function shell(title, body, meta = {}) {
  const full_title = meta.root ? `${title} — Humanist Software Developer` : `${title} — Scott Fryxell`
  const description = meta.description || 'Humanist software developer in San Francisco — building tools that respect the people who use them.'
  const canonical = meta.url ? `${SITE}${meta.url}` : SITE
  const og_image = `${SITE}${meta.og_image_path}`
  const og_type = meta.type || 'website'
  return `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="darkreader-lock">
  <title>${full_title}</title>
  <meta name="description" content="${description}">
  <link rel="canonical" href="${canonical}">
  <meta property="og:site_name" content="Scott Fryxell">
  <meta property="og:type" content="${og_type}">
  <meta property="og:title" content="${full_title}">
  <meta property="og:description" content="${description}">
  <meta property="og:url" content="${canonical}">
  <meta property="og:image" content="${og_image}">
  <meta property="og:image:type" content="image/jpeg">
  <meta property="og:image:width" content="${OG_WIDTH}">
  <meta property="og:image:height" content="${OG_HEIGHT}">
  <meta property="og:image:alt" content="${full_title}">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="${full_title}">
  <meta name="twitter:description" content="${description}">
  <meta name="twitter:image" content="${og_image}">
  <meta name="twitter:image:alt" content="${full_title}">
  <link rel="stylesheet" href="/style.css">
  <link rel="icon" type="image/svg+xml" href="/icons.svg">
  <link rel="apple-touch-icon" href="/192.png">
  ${WATCH ? live_reload : ''}
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
<script>
  document.addEventListener('click', event => {
    const link = event.target.closest('a[data-reveal-target]')
    if (!link) return
    const target = link.getAttribute('data-reveal-target')
    const panel = document.getElementById(target)
    if (!panel) return
    event.preventDefault()
    const opening = panel.hidden
    panel.hidden = !opening
    if (opening) panel.scrollIntoView({ block: 'nearest' })
  })
</script>
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
const og_images = new Map()

// social previews (iMessage, Slack, Twitter) don't render SVG og:image —
// flatten each referenced poster to a fixed-size raster once per build
async function raster_og_image(img) {
  const name = img || RESUME_IMG.replace('/posters/', '')
  if (og_images.has(name)) return og_images.get(name)
  const out_name = name.replace(/\.svg$/i, '.jpg')
  const path = `/og/${encodeURIComponent(out_name)}`
  await mkdir(join(OUT, 'og'), { recursive: true })
  const svg = await readFile(join(STATIC, 'posters', name), 'utf8')
  const complete_svg = svg.includes('id="background"') && !svg.includes('href="#background"')
    ? svg.replace(/(<svg\b[^>]*>)/, '$1<use itemprop="background" href="#background"/>')
    : svg
  const buffer = await sharp(Buffer.from(complete_svg), { density: 150 })
    .resize(OG_WIDTH, OG_HEIGHT, { fit: 'cover', position: 'centre' })
    .flatten({ background: '#ffffff' })
    .jpeg({ quality: 82 })
    .toBuffer()
  await writeFile(join(OUT, 'og', out_name), buffer)
  og_images.set(name, path)
  return path
}

async function load_poster_sizes() {
  const dir = join(STATIC, 'posters')
  for (const name of await readdir(dir)) {
    if (!name.endsWith('.svg')) continue
    const svg = await readFile(join(dir, name), 'utf8')
    const box = svg.match(/viewBox="[\d.-]+ [\d.-]+ ([\d.]+) ([\d.]+)"/)
    if (box) poster_sizes[name] = { width: Number(box[1]), height: Number(box[2]) }
  }
}

function poster(data, title, heading = 'h2', href = null, options = {}) {
  const size = poster_sizes[data.img]
  const ratio = size ? (size.width / size.height).toFixed(4) : null
  const focus = data.focus ? `; --focus: ${data.focus}` : ''
  const figure_style = ratio ? ` style="--ratio: ${ratio}${focus}"` : ''
  const img_attrs = size ? ` width="${size.width}" height="${size.height}"` : ''
  const headline = href ? `<a itemprop="url" href="${href}">${title}</a>` : title
  const close = options.close_href
    ? `<a class="back-link" href="${options.close_href}" aria-label="Back to blog">x</a>`
    : ''
  return `<figure${figure_style}>
      ${data.img ? `<img src="/posters/${data.img}"${img_attrs} alt="" loading="lazy">` : ''}
      <figcaption>
        <${heading} itemprop="headline">${headline}${data.draft ? ' <mark class="draft">draft</mark>' : ''}</${heading}>
        ${data.date ? `<time itemprop="datePublished" datetime="${data.date}">${format_date(data.date)}</time>` : ''}
        ${close}
      </figcaption>
    </figure>`
}

const entities = { amp: '&', lt: '<', gt: '>', quot: '"', '#39': "'" }
const code_block = /<pre(?: language="([^"]*)")?><code[^>]*>([\s\S]*?)<\/code><\/pre>/g

// comark hands us the language on the fence; shiki turns it into themed spans
async function highlight(html) {
  const blocks = [...html.matchAll(code_block)]
  if (!blocks.length) return html
  const rendered = await Promise.all(blocks.map(([, language, code]) =>
    codeToHtml(code.replace(/&(amp|lt|gt|quot|#39);/g, (_, name) => entities[name]), {
      lang: language || 'text',
      themes: { light: 'one-light', dark: 'one-dark-pro' },
      defaultColor: false
    })
  ))
  return blocks.reduce((out, block, i) => out.replace(block[0], () => rendered[i]), html)
}

const lone_image = /<p>(<img [^>]*>)<\/p>/g
const title_attr = / title="([^"]*)"/

// a paragraph that holds nothing but an image is a plate: pull it out of the
// prose column and hand the markdown title to a caption
function plate(html) {
  return html.replace(lone_image, (_, img) => {
    const caption = img.match(title_attr)?.[1]
    return `<figure class="plate">${img.replace(title_attr, '')}${caption ? `<figcaption>${caption}</figcaption>` : ''}</figure>`
  })
}

const external_link = /<a ([^>]*?)href="(https?:\/\/[^"]+)"([^>]*)>([\s\S]*?)<\/a>/g

// paper has no hover and no address bar: number every outbound link and
// collect the addresses into an endnote list the print sheet reveals
function footnote(html) {
  const seen = new Map()
  const marked = html.replace(external_link, (_, before, href, after, text) => {
    if (!seen.has(href)) seen.set(href, seen.size + 1)
    const n = seen.get(href)
    return `<a ${before}href="${href}"${after}>${text}</a><sup class="note-mark">${n}</sup>`
  })
  if (!seen.size) return { html: marked, notes: '' }
  const items = [...seen.keys()].map(href => `<li>${href}</li>`).join('')
  const notes = `<ol class="notes">${items}</ol>`
  return { html: marked, notes }
}

function strip_tags(html) {
  return html.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim()
}

function article_slug(file) {
  const parts = relative(ARTICLES, file).replace(/\.md$/, '').split('/')
  if (/^\d{4}$/.test(parts[0])) return parts.slice(1).join('/')
  return parts.join('/')
}

async function build_article(file) {
  const src = await readFile(file, 'utf8')
  const { frontmatter: data } = await parse(src)
  const slug = article_slug(file)
  const title = title_case(data.title || slug.split('/').pop().replace(/-/g, ' '))
  const draft = data.draft === true || data.draft === 'true'
  if (draft && !DRAFTS) return { slug, title, date: data.date, draft }
  const { html, notes } = footnote(plate(await highlight(await render(src))))
  const article = `<article itemscope itemtype="http://schema.org/BlogPosting">
    ${poster(data, title, 'h1', null, { close_href: '/' })}
    <section itemprop="articleBody">${html}${notes}</section>
  </article>`
  const out = join(OUT, 'blog', slug, 'index.html')
  await mkdir(join(OUT, 'blog', slug), { recursive: true })
  const description = data.description || strip_tags(html).slice(0, 160).trim()
  const og_image_path = await raster_og_image(data.img)
  await writeFile(out, shell(title, article, { url: `/blog/${slug}`, og_image_path, description, type: 'article' }))
  return { slug, title, date: data.date, img: data.img, focus: data.focus, draft, html, notes }
}

async function build_index(articles) {
  const published = articles
    .filter(a => DRAFTS || !a.draft)
    .sort((a, b) => (b.date || '').localeCompare(a.date || ''))
  const items = published.map(a => `<article itemscope itemtype="http://schema.org/BlogPosting">
    <details>
      <summary>${poster(a, a.title, 'h2', `/blog/${a.slug}`)}</summary>
      <section itemprop="articleBody">${a.html}${a.notes || ''}</section>
    </details>
  </article>`).join('\n')
  const latest = published.find(a => a.img)
  const og_image_path = await raster_og_image(latest?.img)
  await writeFile(join(OUT, 'index.html'), shell('Scott Fryxell', `<section>${items}</section>`, { root: true, url: '/', og_image_path }))
}

async function build_resume() {
  const html = await readFile('resume.html', 'utf8')
  await mkdir(join(OUT, 'resume'), { recursive: true })
  const description = 'Software developer with 25+ years experience across the full range of craft — design, architecture, implementation, and delivery. Based in San Francisco.'
  const og_image_path = await raster_og_image()
  await writeFile(join(OUT, 'resume', 'index.html'), shell('Resume', html, {
    url: '/resume',
    og_image_path,
    description,
    type: 'profile'
  }))
}

async function build_sitemap(articles) {
  const published = articles.filter(a => DRAFTS || !a.draft)
  const urls = [
    { loc: '/', lastmod: published[0]?.date },
    { loc: '/resume' },
    ...published.map(a => ({ loc: `/blog/${a.slug}`, lastmod: a.date }))
  ]
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(u => `  <url>
    <loc>${SITE}${u.loc}</loc>${u.lastmod ? `\n    <lastmod>${u.lastmod.split('T')[0]}</lastmod>` : ''}
  </url>`).join('\n')}
</urlset>
`
  await writeFile(join(OUT, 'sitemap.xml'), xml)
  await writeFile(join(OUT, 'robots.txt'), `User-agent: *
Allow: /

Sitemap: ${SITE}/sitemap.xml
`)
}

async function build() {
  await mkdir(OUT, { recursive: true })
  await cp(STATIC, OUT, { recursive: true }).catch(() => {})
  if (existsSync('style.css')) await cp('style.css', join(OUT, 'style.css'))

  await load_poster_sizes()
  const files = await walk(ARTICLES)
  const articles = await Promise.all(files.map(build_article))
  await build_index(articles)
  await build_resume()
  await build_sitemap(articles)
  if (WATCH) await writeFile(join(OUT, 'build-stamp.txt'), String(Date.now()))
  console.log(`built ${articles.length} articles`)
}

function watch_sources() {
  let pending = null
  const rebuild = () => {
    clearTimeout(pending)
    pending = setTimeout(() => build().catch(error => console.error(error.message)), 50)
  }
  for (const dir of ['content', STATIC]) watch(dir, { recursive: true }, rebuild)
  watch('resume.html', rebuild)
  watch('build.js', rebuild)
  console.log('watching content, static, resume.html, build.js')
}

await build()
if (WATCH) watch_sources()
