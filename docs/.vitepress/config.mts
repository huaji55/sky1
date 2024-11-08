import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/sky/',
  title: '光遇資訊',
  description: '提供翻譯後的國際服光遇公告、已知問題、活動公告',
  themeConfig: {
    nav: [
      { text: '首頁', link: '/' },
      { text: '介紹', link: '/introduce' },
      { text: '活動', link: '/events/' },
      { text: '更新說明', link: '/patch-notes' },
      { text: '已知問題', link: '/known-issues' },
      { text: 'GitHub 專業', link: 'https://github.com/huaji55/sky/' },
    ],
    sidebar: {
      '/': [
        {
          text: '指南',
          items: [
            { text: '介紹', link: '/introduce' },
            { text: '活動', link: '/events/' },
            { text: '更新說明', link: '/patch-notes' },
            { text: '已知問題', link: '/known-issues' },
            { text: 'GitHub 專業', link: 'https://github.com/huaji55/sky/' }
          ],
        },
        {
          text: '活動',
          collapsible: true,
          items: [
            { text: '幸運日', link: '/events/event1' },
            { text: '愛之日', link: '/events/event2' },
            { text: '花之日', link: '/events/event3' },
            { text: '自然日', link: '/events/event4' },
            { text: '彩虹日', link: '/events/event5' },
            { text: '周年慶', link: '/events/event6' },
            { text: '錦標賽', link: '/events/event7' },
            { text: '陽光日', link: '/events/event8' },
            { text: '月光日', link: '/events/event9' },
            { text: '時尚日', link: '/events/event10' },
            { text: '萬聖節', link: '/events/event11' },
            { text: '盛宴日', link: '/events/event12' },
            { text: '音樂節', link: '/events/event13' },
            { text: '咖啡日', link: '/events/event14' },
          ],
        },
      ],
    },
  },
});

