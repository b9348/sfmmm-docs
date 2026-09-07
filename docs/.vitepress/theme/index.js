import DefaultTheme from 'vitepress/theme'
import Layout from './Layout.vue'

/**
 * 自定义主题:继承默认主题,仅扩展语言智能跳转逻辑(Layout.vue)。
 * 浏览器语言探测只在根路径(中文首页)执行一次,尊重用户手动选择的语言。
 */
export default {
  extends: DefaultTheme,
  Layout,
}
