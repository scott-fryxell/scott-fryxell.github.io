import { render } from '@comark/html'
import { parse } from 'comark'
import { readdir, readFile, writeFile, mkdir, cp } from 'fs/promises'
import { join, relative } from 'path'
import { existsSync } from 'fs'

const ARTICLES = 'content/articles'
const STATIC = 'static'
const OUT = 'dist'

function format_date(str) {
  if (!str) return ''
  return new Date(`${str.split('T')[0]}T12:00:00Z`)
    .toLocaleDateString('en', { year: 'numeric', month: 'long', day: 'numeric' })
}

function shell(title, body, root = false) {
  return `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${root ? title : `${title} — Scott Fryxell`}</title>
  <link rel="stylesheet" href="/style.css">
  <link rel="icon" type="image/x-icon" href="/favicon.ico">
</head>
<body>
<main>
  <header>
    <h1><a href="/">Scott Fryxell</a></h1>
    <nav>
      <a href="/resume">Resume</a>
      <a href="https://realness.online" target="_blank" rel="noopener noreferrer">Thoughts</a>
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

function poster(data, title, heading = 'h2') {
  return `<figure>
      ${data.img ? `<img src="/posters/${data.img}" alt="" loading="lazy">` : ''}
      <figcaption>
        <${heading} itemprop="headline">${title}</${heading}>
        ${data.date ? `<time itemprop="datePublished" datetime="${data.date}">${format_date(data.date)}</time>` : ''}
      </figcaption>
    </figure>`
}

async function build_article(file) {
  const src = await readFile(file, 'utf8')
  const { frontmatter: data } = await parse(src)
  const slug = relative(ARTICLES, file).replace(/\.md$/, '')
  const title = data.title || slug.split('/').pop().replace(/-/g, ' ')
  const html = await render(src)
  const article = `<article itemscope itemtype="http://schema.org/BlogPosting">
    ${poster(data, title, 'h1')}
    <section itemprop="articleBody">${html}</section>
  </article>`
  const out = join(OUT, 'blog', slug, 'index.html')
  await mkdir(join(OUT, 'blog', slug), { recursive: true })
  await writeFile(out, shell(title, article))
  return { slug, title, date: data.date, img: data.img, draft: data.draft === 'true', html }
}

async function build_index(articles) {
  const published = articles
    .filter(a => !a.draft)
    .sort((a, b) => (b.date || '').localeCompare(a.date || ''))
  const items = published.map(a => `<article itemscope itemtype="http://schema.org/BlogPosting">
    <details>
      <summary>${poster(a, a.title)}</summary>
      <section itemprop="articleBody">${a.html}</section>
    </details>
  </article>`).join('\n')
  await writeFile(join(OUT, 'index.html'), shell('Scott Fryxell', `<section>${items}</section>`, true))
}

async function build_resume() {
  const html = await readFile('resume.html', 'utf8')
  await mkdir(join(OUT, 'resume'), { recursive: true })
  await writeFile(join(OUT, 'resume', 'index.html'), shell('Resume', html))
}

async function main() {
  await mkdir(OUT, { recursive: true })
  await cp(STATIC, OUT, { recursive: true }).catch(() => {})
  if (existsSync('style.css')) await cp('style.css', join(OUT, 'style.css'))

  const files = await walk(ARTICLES)
  const articles = await Promise.all(files.map(build_article))
  await build_index(articles)
  await build_resume()
  console.log(`built ${articles.length} articles`)
}

main()
