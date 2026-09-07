<script setup>
import DefaultTheme from 'vitepress/theme'
import { onMounted, watch } from 'vue'
import { useRoute } from 'vitepress'

/**
 * 根路径语言智能跳转
 *
 * - 仅当访问站点根路径 `/`(中文首页)时触发;
 * - 已通过 localStorage 记住用户语言选择 → 不再自动跳转,尊重用户;
 * - 否则按浏览器 navigator.language 探测:en → /en/,ja → /ja/,
 *   zh* 及其它语言 → 留在中文首页(root 是中文,作为兜底)。
 * - 用户在任意页面切换语言后,把当前语言写入 localStorage,
 *   使其之后回到根路径时不再被自动跳走。
 */
const STORAGE_KEY = 'sfmmm-ui-lang'
const route = useRoute()

function readMemory() {
  try {
    return localStorage.getItem(STORAGE_KEY)
  } catch {
    return null
  }
}

function writeMemory(lang) {
  try {
    localStorage.setItem(STORAGE_KEY, lang)
  } catch {
    /* ignore */
  }
}

function maybeAutoRedirect() {
  const path = window.location.pathname
  const rootPath = path === '/' || path === '' || path.replace(/\/+$/, '') === ''
  if (!rootPath) return
  if (readMemory()) return

  const nav = (navigator.language || navigator.userLanguage || '').toLowerCase()
  let target = null
  if (nav.startsWith('en')) target = '/en/'
  else if (nav.startsWith('ja')) target = '/ja/'
  // zh / zh-CN / 其它语言 → 留在中文兜底首页

  if (target && target !== path) window.location.replace(target)
}

function recordCurrentLocale(path) {
  let lang = 'zh'
  if (path === '/en/' || path.startsWith('/en/')) lang = 'en'
  else if (path === '/ja/' || path.startsWith('/ja/')) lang = 'ja'
  writeMemory(lang)
}

onMounted(maybeAutoRedirect)
watch(
  () => route.path,
  (p) => recordCurrentLocale(p)
)
</script>

<template>
  <DefaultTheme.Layout />
</template>
