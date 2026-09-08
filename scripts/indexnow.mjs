/**
 * IndexNow 主动推送(Bing / Yandex / Naver / Seznam 支持的发现协议)
 *
 * 用法:先构建(pnpm build 生成 sitemap.xml),再执行 `pnpm indexnow`。
 * 前置条件:域名根下已存在 /<key>.txt 密钥文件(由 docs/public 随构建发布)。
 *
 * - host / url 列表来源:dist/sitemap.xml 的 <loc> 与 <xhtml:link>
 * - 密钥自动从 docs/public/<key>.txt 探测(文件名即密钥,内容与之相同)
 */
import { readFileSync, readdirSync } from 'node:fs'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const ROOT = join(__dirname, '..')
const DIST = join(ROOT, 'docs', '.vitepress', 'dist')

function normalizeSiteUrl(raw) {
  let u = (raw || '').trim().replace(/\/+$/, '')
  if (!/^https?:\/\//i.test(u)) u = `https://${u}`
  return u
}
const SITE_URL = normalizeSiteUrl(process.env.SITE_URL)

// 1) 从 public 目录探测密钥文件
const pub = join(ROOT, 'docs', 'public')
let key = null
for (const f of readdirSync(pub)) {
  if (f.endsWith('.txt') && /^[0-9a-fA-F]{8,128}$/.test(f.slice(0, -4))) {
    const content = readFileSync(join(pub, f), 'utf8').trim()
    if (content === f.slice(0, -4)) {
      key = content
      break
    }
  }
}
if (!key) {
  console.error('[indexnow] 未找到合法密钥文件(docs/public/<key>.txt)。已中止。')
  process.exit(1)
}

// 2) 从 sitemap.xml 提取全部 URL,仅保留本站 https://<host> 链接,
//    排除 XML 命名空间等外部 URL
const host = new URL(SITE_URL).host
const sitemap = readFileSync(join(DIST, 'sitemap.xml'), 'utf8')
const urlSet = new Set()
for (const m of sitemap.matchAll(/https:\/\/[^<\s"]+/g)) {
  const u = m[0]
  try {
    if (new URL(u).host === host) urlSet.add(u)
  } catch {
    /* ignore malformed */
  }
}
const urlList = [...urlSet].sort()
if (!urlList.length) {
  console.error('[indexnow] sitemap 中未找到本站 URL,请先执行 pnpm build。')
  process.exit(1)
}

const keyLocation = `${SITE_URL}/${key}.txt`
const payload = { host, key, keyLocation, urlList }

console.log(`[indexnow] host=${host} urls=${urlList.length}`)
console.log(`[indexnow] keyLocation=${keyLocation}`)

// 3) 推送(api.indexnow.org 会自动分发到 Bing 等)
const res = await fetch('https://api.indexnow.org/indexnow', {
  method: 'POST',
  headers: { 'content-type': 'application/json; charset=utf-8' },
  body: JSON.stringify(payload),
})
console.log(`[indexnow] HTTP ${res.status} ${res.statusText}`)
if (!res.ok) {
  console.log(await res.text())
  process.exit(1)
}
console.log('[indexnow] done. 前 8 个 URL:')
console.log(urlList.slice(0, 8).join('\n'))
