import { defineConfig } from 'vitepress'

/**
 * SFMMM 官方介绍站点 — 三语(locales)配置
 *
 * - root = 简体中文(SEO 主体,兜底语言),/en/ = English,/ja/ = 日本語
 * - 正式域名经环境变量 SITE_URL 注入(Cloudflare Pages 构建时设置);
 *   canonical / og:url / sitemap 均基于它生成。
 */
const SITE_URL = (process.env.SITE_URL || 'https://sfmmm.example.com').replace(/\/+$/, '')

const DESC_ZH =
  'SFMMM 是塞雷卡(Secret Flasher Manaka)的创意工坊 Mod 管理器。塞雷卡2 是当前社区主要游玩的全面改进版。一站式支持模组浏览、订阅下载、评分评论、社区讨论与 BepInEx 前置一键安装,v1/v2 自定义任务生态全覆盖。'
const DESC_EN =
  'SFMMM is a Workshop mod manager for Secret Flasher Manaka. Browse, subscribe, rate and discuss mods, install BepInEx prerequisites in one click, and manage the v1/v2 custom-mission ecosystem.'
const DESC_JA =
  'SFMMM は SecretFlasher Manaka 向けのワークショップ Mod マネージャーです。Mod の閲覧・購読・評価・コメント、ディスカッション、BepInEx 前提環境のワンクリック導入、v1/v2 カスタム任務エコシステムに対応。'

const KEYWORDS_ZH =
  '塞雷卡,塞雷卡2,塞雷卡创意工坊,塞雷卡创意工坊mod管理器,塞雷卡mod管理器,Secret Flasher Manaka,SFMMM,SFM mod manager,SFM模组管理器,创意工坊mod管理器,塞雷卡mod,BepInEx'
const KEYWORDS_EN =
  'SFMMM,Secret Flasher Manaka,Secret Flasher Manaka 2,SecretFlasherManaka,workshop mod manager,SFM mods,SFM mod manager,BepInEx,custom missions'
const KEYWORDS_JA =
  'SFMMM,SecretFlasherManaka,ワークショップ,Modマネージャー,シークレットフラッシャー,SFM mod,BepInEx,カスタム任務'

// ---------------- 导航 / 侧边栏(三语) ----------------
function navFor(p) {
  return [
    { text: p ? 'Home' : '首页', link: p ? `${p}/` : '/' },
    {
      text: p ? 'Features' : '功能介绍',
      items: [
        { text: p ? 'Local Mods' : '本地模组', link: `${p}/guide/localmods/mods` },
        { text: p ? 'Workshop' : '创意工坊', link: `${p}/guide/workshop/browse` },
        { text: p ? 'Notifications' : '通知中心', link: `${p}/guide/notify` },
        { text: p ? 'Settings' : '设置', link: `${p}/guide/settings` },
      ],
    },
    { text: p ? 'Getting Started' : '快速开始', link: `${p}/guide/getting-started` },
    { text: 'GitHub', link: 'https://github.com/b9348/sfmmm' },
  ]
}

const sidebarZh = [
  { text: '开始使用', items: [{ text: '快速开始', link: '/guide/getting-started' }] },
  {
    text: '本地模组',
    collapsed: false,
    items: [
      { text: '模组管理', link: '/guide/localmods/mods' },
      { text: '自定义任务 v1 / v2', link: '/guide/localmods/missions' },
      { text: '存档管理', link: '/guide/localmods/saves' },
    ],
  },
  {
    text: '创意工坊',
    collapsed: false,
    items: [
      { text: '云 · 模组浏览', link: '/guide/workshop/browse' },
      { text: '讨论区', link: '/guide/workshop/discuss' },
      { text: '我的 · 作者工作台', link: '/guide/workshop/my' },
      { text: '订阅记录', link: '/guide/workshop/records' },
    ],
  },
  {
    text: '通知中心',
    collapsed: false,
    items: [{ text: '回复 / 申请 / 点赞 / 评分', link: '/guide/notify' }],
  },
  { text: '设置', collapsed: false, items: [{ text: '设置页', link: '/guide/settings' }] },
]

const sidebarEn = [
  { text: 'Getting Started', items: [{ text: 'Quick Start', link: '/en/guide/getting-started' }] },
  {
    text: 'Local Mods',
    collapsed: false,
    items: [
      { text: 'Mods', link: '/en/guide/localmods/mods' },
      { text: 'Custom Missions v1 / v2', link: '/en/guide/localmods/missions' },
      { text: 'Save Management', link: '/en/guide/localmods/saves' },
    ],
  },
  {
    text: 'Workshop',
    collapsed: false,
    items: [
      { text: 'Cloud · Browse Mods', link: '/en/guide/workshop/browse' },
      { text: 'Discussions', link: '/en/guide/workshop/discuss' },
      { text: 'Mine · Creator Workspace', link: '/en/guide/workshop/my' },
      { text: 'Subscription Records', link: '/en/guide/workshop/records' },
    ],
  },
  {
    text: 'Notifications',
    collapsed: false,
    items: [{ text: 'Replies / Applications / Likes / Ratings', link: '/en/guide/notify' }],
  },
  { text: 'Settings', collapsed: false, items: [{ text: 'Settings', link: '/en/guide/settings' }] },
]

const sidebarJa = [
  { text: 'はじめに', items: [{ text: 'クイックスタート', link: '/ja/guide/getting-started' }] },
  {
    text: 'ローカル Mod',
    collapsed: false,
    items: [
      { text: 'Mod 管理', link: '/ja/guide/localmods/mods' },
      { text: 'カスタム任務 v1 / v2', link: '/ja/guide/localmods/missions' },
      { text: 'セーブ管理', link: '/ja/guide/localmods/saves' },
    ],
  },
  {
    text: 'ワークショップ',
    collapsed: false,
    items: [
      { text: 'クラウド · Mod 閲覧', link: '/ja/guide/workshop/browse' },
      { text: 'ディスカッション', link: '/ja/guide/workshop/discuss' },
      { text: 'マイページ · 作者向け', link: '/ja/guide/workshop/my' },
      { text: '購読履歴', link: '/ja/guide/workshop/records' },
    ],
  },
  {
    text: '通知',
    collapsed: false,
    items: [{ text: '返信 / 申請 / いいね / 評価', link: '/ja/guide/notify' }],
  },
  { text: '設定', collapsed: false, items: [{ text: '設定ページ', link: '/ja/guide/settings' }] },
]

function themeZh() {
  return {
    siteTitle: 'SFMMM',
    nav: navFor(''),
    sidebar: { '/guide/': sidebarZh },
    outline: { level: [2, 3], label: '本页目录' },
    docFooter: { prev: '上一页', next: '下一页' },
    lastUpdated: { text: '最后更新于' },
    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '菜单',
    darkModeSwitchLabel: '主题',
    lightModeSwitchTitle: '切换到亮色模式',
    darkModeSwitchTitle: '切换到深色模式',
    footer: { message: '基于 MIT 许可发布', copyright: 'Copyright © SFMMM Contributors' },
    search: {
      provider: 'local',
      options: {
        translations: {
          button: { buttonText: '搜索文档', buttonAriaLabel: '搜索文档' },
          modal: {
            noResultsText: '无法找到相关结果',
            resetButtonTitle: '清除查询条件',
            footer: { selectText: '选择', navigateText: '切换', closeText: '关闭' },
          },
        },
      },
    },
  }
}

function themeEn() {
  return {
    siteTitle: 'SFMMM',
    nav: navFor('/en'),
    sidebar: { '/en/guide/': sidebarEn },
    outline: { level: [2, 3], label: 'On this page' },
    docFooter: { prev: 'Previous', next: 'Next' },
    lastUpdated: { text: 'Updated at' },
    returnToTopLabel: 'Back to top',
    sidebarMenuLabel: 'Menu',
    darkModeSwitchLabel: 'Theme',
    lightModeSwitchTitle: 'Switch to light theme',
    darkModeSwitchTitle: 'Switch to dark theme',
    footer: { message: 'Released under the MIT License', copyright: 'Copyright © SFMMM Contributors' },
    search: {
      provider: 'local',
      options: {
        translations: {
          button: { buttonText: 'Search docs', buttonAriaLabel: 'Search docs' },
          modal: {
            noResultsText: 'No results found',
            resetButtonTitle: 'Reset search',
            footer: { selectText: 'Select', navigateText: 'Switch', closeText: 'Close' },
          },
        },
      },
    },
  }
}

function themeJa() {
  return {
    siteTitle: 'SFMMM',
    nav: navFor('/ja'),
    sidebar: { '/ja/guide/': sidebarJa },
    outline: { level: [2, 3], label: '目次' },
    docFooter: { prev: '前のページ', next: '次のページ' },
    lastUpdated: { text: '最終更新' },
    returnToTopLabel: 'トップへ戻る',
    sidebarMenuLabel: 'メニュー',
    darkModeSwitchLabel: 'テーマ',
    lightModeSwitchTitle: 'ライトテーマに切替',
    darkModeSwitchTitle: 'ダークテーマに切替',
    footer: { message: 'MIT ライセンスで公開中', copyright: 'Copyright © SFMMM Contributors' },
    search: {
      provider: 'local',
      options: {
        translations: {
          button: { buttonText: '検索', buttonAriaLabel: '検索' },
          modal: {
            noResultsText: '該当する結果が見つかりません',
            resetButtonTitle: '検索条件をクリア',
            footer: { selectText: '選択', navigateText: '切替', closeText: '閉じる' },
          },
        },
      },
    },
  }
}

// ---------------- URL / head 工具 ----------------
const SUB_LANGS = ['en', 'ja']

// 页面 md 文件路径 → 站点 URL(cleanUrls=false,产出 .html)
function pageToUrl(page) {
  let p = page.replace(/\\/g, '/').replace(/\.md$/, '')
  let prefix = ''
  for (const l of SUB_LANGS) {
    if (p === l || p.startsWith(`${l}/`)) {
      prefix = `/${l}`
      p = p === l ? '' : p.slice(l.length + 1)
      break
    }
  }
  if (p === 'index' || p === '') return prefix ? `${prefix}/` : '/'
  return `${prefix}/${p}.html`
}

// 将页面 md 文件切到目标语言:'zh' 表示 root(去前缀),en/ja 加前缀
function pageInLocale(page, loc) {
  const core = page.replace(/^(en|ja)\//, '')
  return loc === 'zh' ? core : `${loc}/${core}`
}

function langOfPage(page) {
  if (page === 'en' || page.startsWith('en/')) return 'en'
  if (page === 'ja' || page.startsWith('ja/')) return 'ja'
  return 'zh'
}

const OG_LOCALE = { zh: 'zh_CN', en: 'en_US', ja: 'ja_JP' }

function seoHeadFor({ page, title, description }) {
  const lang = langOfPage(page)
  const url = pageToUrl(page)
  const fullUrl = `${SITE_URL}${url}`
  const ogDesc = String(description || '').slice(0, 200)

  const head = [
    ['link', { rel: 'canonical', href: fullUrl }],
    ['meta', { property: 'og:type', content: url === '/' ? 'website' : 'article' }],
    ['meta', { property: 'og:url', content: fullUrl }],
    ['meta', { property: 'og:title', content: title }],
    ['meta', { property: 'og:description', content: ogDesc }],
    ['meta', { property: 'og:locale', content: OG_LOCALE[lang] }],
  ]

  // og:locale 备选 + hreflang 互链(root=zh-CN / en / ja)
  for (const [hreflang, locKey] of [
    ['zh-CN', 'zh'],
    ['en', 'en'],
    ['ja', 'ja'],
  ]) {
    if (locKey !== lang) {
      head.push(['meta', { property: 'og:locale:alternate', content: OG_LOCALE[locKey] }])
    }
    head.push(['link', { rel: 'alternate', hreflang, href: `${SITE_URL}${pageToUrl(pageInLocale(page, locKey))}` }])
  }
  // x-default 指向中文首页(SEO 主体语言)
  head.push(['link', { rel: 'alternate', hreflang: 'x-default', href: `${SITE_URL}/` }])
  return head
}

// ---------------- 站点配置 ----------------
export default defineConfig({
  lang: 'zh-CN',
  title: 'SFMMM',

  // 站点级共享主题项(locale 浅合并兜底)
  themeConfig: {
    socialLinks: [{ icon: 'github', link: 'https://github.com/b9348/sfmmm' }],
    externalLinkIcon: true,
  },

  locales: {
    root: {
      label: '简体中文',
      lang: 'zh-CN',
      title: 'SFMMM · 塞雷卡创意工坊 Mod 管理器',
      description: DESC_ZH,
      head: [
        ['meta', { name: 'keywords', content: KEYWORDS_ZH }],
        ['meta', { name: 'twitter:title', content: 'SFMMM · 塞雷卡创意工坊 Mod 管理器' }],
        ['meta', { name: 'twitter:description', content: DESC_ZH }],
      ],
      themeConfig: themeZh(),
      markdown: {
        container: { tipLabel: '提示', warningLabel: '注意', dangerLabel: '警告', detailsLabel: '详情' },
        codeCopyButton: { tooltipText: '复制代码', copiedText: '已复制' },
      },
    },
    en: {
      label: 'English',
      lang: 'en',
      title: 'SFMMM · Mod Manager for Secret Flasher Manaka',
      description: DESC_EN,
      head: [
        ['meta', { name: 'keywords', content: KEYWORDS_EN }],
        ['meta', { name: 'twitter:title', content: 'SFMMM · Mod Manager for Secret Flasher Manaka' }],
        ['meta', { name: 'twitter:description', content: DESC_EN }],
      ],
      themeConfig: themeEn(),
      markdown: {
        container: { tipLabel: 'TIP', warningLabel: 'WARNING', dangerLabel: 'WARNING', detailsLabel: 'Details' },
        codeCopyButton: { tooltipText: 'Copy code', copiedText: 'Copied' },
      },
    },
    ja: {
      label: '日本語',
      lang: 'ja',
      title: 'SFMMM · ワークショップ Mod マネージャー',
      description: DESC_JA,
      head: [
        ['meta', { name: 'keywords', content: KEYWORDS_JA }],
        ['meta', { name: 'twitter:title', content: 'SFMMM · ワークショップ Mod マネージャー' }],
        ['meta', { name: 'twitter:description', content: DESC_JA }],
      ],
      themeConfig: themeJa(),
      markdown: {
        container: { tipLabel: 'ヒント', warningLabel: '注意', dangerLabel: '警告', detailsLabel: '詳細' },
        codeCopyButton: { tooltipText: 'コードをコピー', copiedText: 'コピーしました' },
      },
    },
  },

  // 为每个静态页面自动注入 canonical / hreflang / og,无需逐页手写 head
  async transformHead(ctx) {
    const { page, title, description } = ctx
    return seoHeadFor({ page, title, description })
  },
})
