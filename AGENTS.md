# CODEBUDDY.md

This file provides guidance to CodeBuddy Code when working with code in this repository.

## 项目概览

SFMMM 官方介绍站点:一个纯 VitePress 1.x 文档站,为 SFMMM(Tauri 2 桌面应用,塞雷卡 / Secret Flasher Manaka 系列的创意工坊 Mod 管理器,源码仓库 github.com/b9348/sfmmm)提供用户文档。仓库中只有 Markdown 内容、VitePress 配置和两个 Node 构建脚本,没有应用代码、没有测试、没有 lint。

## 常用命令

包管理器为 pnpm。

```bash
pnpm dev        # 启动开发服务器 (vitepress dev docs)
pnpm build      # 构建到 docs/.vitepress/dist,随后运行 scripts/gen-sitemap.mjs 生成 sitemap.xml + robots.txt
pnpm preview    # 本地预览构建产物
pnpm indexnow   # 构建后向 IndexNow(Bing 等)推送全部 URL
```

- `pnpm indexnow` 的前置条件:先 `pnpm build`,且 `docs/public/<十六进制密钥>.txt` 存在(文件名即密钥,内容必须与文件名相同)。密钥文件勿删改。
- 构建/SEO 依赖环境变量 `SITE_URL`(生产域名,可省略 `https://` 前缀,会被 `normalizeSiteUrl` 补全;缺省为占位域 `sfmmm.example.com`)。Cloudflare Pages 部署时由平台注入,本地构建不设也可。
- 验证单页效果用 `pnpm dev` 即可;没有单测可运行,改动正确性靠构建成功 + 页面渲染检查。

## 架构

### 三语 locale 结构(核心约束)

- root(`/`)= 简体中文,是 SEO 主体与兜底语言;`docs/en/` = English;`docs/ja/` = 日本語。
- 三棵目录树按页面路径一一镜像:`index.md`、`guide/getting-started.md`、`guide/localmods/{mods,missions,saves}.md`、`guide/workshop/{browse,discuss,my,records}.md`、`guide/{notify,settings}.md`。
- **新增/修改页面必须三语同步**:新建页面要同时创建三份 md,并在 `docs/.vitepress/config.mjs` 的 `sidebarZh` / `sidebarEn` / `sidebarJa`(必要时 `navFor`)中加入对应条目;`scripts/gen-sitemap.mjs` 会剔除 root 缺失的孤页(en/ja 有而 root 无),导致该页完全不出现在 sitemap。
- 中文为内容权威版本,en/ja 为翻译。

### SEO 机制(集中在 config.mjs,页面零负担)

- 每页只需在 frontmatter 写 `title` 和 `description`(description 会截断到 200 字符用于 og:description)。
- `transformHead` → `seoHeadFor()` 根据页面 md 路径自动推导 canonical、og:locale(含 alternates)、三语 hreflang 互链和 x-default(指向中文首页),不要在页面里手写这些 head 标签。
- `cleanUrls` 未开启,生成 URL 以 `.html` 结尾;`pageToUrl` / `urlOf`(gen-sitemap.mjs)封装了「md 路径 → 站点 URL」的映射规则,两处逻辑需保持一致。

### 构建脚本

- `scripts/gen-sitemap.mjs`(build 链自动执行):扫描 `docs/**/*.md`(排除 .vitepress/public),按去掉 `en/`、`ja/` 前缀后的"核心路径"分组,生成带 `<xhtml:link rel="alternate">` 三语互链的 sitemap.xml 与 robots.txt,写入 dist。
- `scripts/indexnow.mjs`(手动执行):从 dist/sitemap.xml 提取本站 URL 推送到 api.indexnow.org;host 由 SITE_URL 决定,非本站 URL 会被过滤。
- `normalizeSiteUrl` 在 config.mjs、gen-sitemap.mjs、indexnow.mjs 中各有一份(略有差异),改动域名归一化逻辑时需三处同步。

### 自定义主题(docs/.vitepress/theme/)

继承 VitePress 默认主题,唯一扩展是 `Layout.vue` 的语言智能跳转:仅在站点根路径 `/` 按 `navigator.language` 自动重定向(en → `/en/`,ja → `/ja/`,其余留在中文),用户选择会写入 localStorage(`sfmmm-ui-lang`),之后不再自动跳转;路由变化时会把当前 locale 记回 localStorage。修改跳转逻辑时保留"尊重用户手动选择"的行为。

## 内容写作约定

- 页面 frontmatter 统一使用 `title` + `description`,description 为该语言的完整 SEO 描述句。
- 首页 `docs/index.md`(及 en/ja 对应文件)使用 `layout: home` 的 hero + features 格式。
- 文档内容描述的是 SFMMM 应用本身(Tauri 2 + Rust 后台任务 + BepInEx 前置管理 + v1/v2 自定义任务生态),写新内容时保持与现有功能文档的事实一致。
- 部署目标是 Cloudflare Pages,构建命令 `pnpm build`。
