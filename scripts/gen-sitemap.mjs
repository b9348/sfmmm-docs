/**
 * 构建后生成 sitemap.xml 与 robots.txt(写入 docs/.vitepress/dist/)
 *
 * - 域名从环境变量 SITE_URL 读取(与 docs/.vitepress/config.mjs 一致),缺省占位。
 * - 遍历 docs/ 下全部 .md(root=zh、/en、/ja),按语言分组生成:
 *   sitemap 每个 <url> 带三语 <xhtml:link rel="alternate"> 互链 + x-default。
 */
import { readdirSync, writeFileSync, existsSync } from 'node:fs'
import { join, dirname, relative, extname } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const ROOT = join(__dirname, '..')
const SRC = join(ROOT, 'docs')
const OUT = join(ROOT, 'docs', '.vitepress', 'dist')
/** 归一化站点地址:允许 SITE_URL 省略协议,统一补全为 https:// */
function normalizeSiteUrl(raw) {
  let u = (raw || '').trim().replace(/\/+$/, '')
  if (!u) u = 'sfmmm.example.com'
  if (!/^https?:\/\//i.test(u)) u = `https://${u}`
  return u
}
const SITE_URL = normalizeSiteUrl(process.env.SITE_URL)

const LANG_META = [
  { code: 'zh-CN', dir: '' },
  { code: 'en', dir: 'en' },
  { code: 'ja', dir: 'ja' },
]

/** 递归收集 srcDir 下的 .md 相对路径,排除 .vitepress / public / node_modules */
function collectMd(dir, base = '') {
  const out = []
  for (const name of readdirSync(dir, { withFileTypes: true })) {
    if (['.vitepress', 'public', 'node_modules'].includes(name.name)) continue
    const abs = join(dir, name.name)
    const rel = join(base, name.name)
    if (name.isDirectory()) out.push(...collectMd(abs, rel))
    else if (name.isFile() && extname(name.name) === '.md') out.push(relative(SRC, abs).replace(/\\/g, '/'))
  }
  return out
}

/** 语言目录 → 该语言 URL 中的核心路径(去掉语言前缀) */
function coreOf(rel) {
  return rel.replace(/^(en|ja)\//, '')
}

/** 核心路径(如 index / guide/localmods/mods)+ 语言 dir → URL */
function urlOf(dir, core) {
  const p = core.replace(/\.md$/, '')
  if (p === 'index') return dir ? `/${dir}/` : '/'
  return dir ? `/${dir}/${p}.html` : `/${p}.html`
}

function existsIn(dir, rel) {
  return existsSync(join(SRC, dir, rel))
}

// 收集并去重「核心页」集合(任何一个语言存在的 md 都算一组)
const all = collectMd(SRC)
const cores = [...new Set(all.map(coreOf))].sort()
cores.forEach((core) => {
  if (!existsIn('', core)) {
    // en/ja 有、root 没有的孤页直接剔除,保持三语分组完整
    cores.splice(cores.indexOf(core), 1)
  }
})

const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')

let xml = '<?xml version="1.0" encoding="UTF-8"?>\n'
xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" '
xml += 'xmlns:xhtml="http://www.w3.org/1999/xhtml">\n'

for (const core of cores) {
  const locs = LANG_META.map(({ code, dir }) => ({ code, href: `${SITE_URL}${urlOf(dir, core)}` }))
  xml += '  <url>\n'
  xml += `    <loc>${esc(locs[0].href)}</loc>\n`
  for (const { code, href } of locs) {
    xml += `    <xhtml:link rel="alternate" hreflang="${code}" href="${esc(href)}" />\n`
  }
  xml += `    <xhtml:link rel="alternate" hreflang="x-default" href="${esc(`${SITE_URL}/`)}" />\n`
  xml += '  </url>\n'
}
xml += '</urlset>\n'

writeFileSync(join(OUT, 'sitemap.xml'), xml, 'utf8')
writeFileSync(
  join(OUT, 'robots.txt'),
  ['User-agent: *', 'Allow: /', '', `Sitemap: ${SITE_URL}/sitemap.xml`, ''].join('\n'),
  'utf8'
)

console.log(`[gen-sitemap] ${cores.length} pages → sitemap.xml + robots.txt @ ${SITE_URL}`)
