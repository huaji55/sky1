import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/sky/',
  title: '光遇資訊',
  description: '提供翻譯後的國際服光遇公告、已知問題、活動公告',
  themeConfig: {
    nav: [
      { text: '首頁', link: '/' },
      { text: '介紹', link: '/介紹' },
      { text: '活動', link: '/活動/' },
      { text: '更新說明', link: '/更新說明' },
      { text: '已知問題', link: '/已知問題' },
      { text: 'GitHub 專案', link: 'https://github.com/' },
    ],
    sidebar: {
      '/': [
        {
          text: '指南',
          items: [
            { text: '介紹', link: '/介紹' },
            { text: '活動', link: '/活動/' },
            { text: '更新說明', link: '/更新說明' },
            { text: '已知問題', link: '/已知問題' },
            { text: 'GitHub 專案', link: 'https://github.com/' }
          ],
        },
        {
          text: '活動',
          collapsible: true,
          items: [
            { text: '幸運日', link: '/活動/event1' },
            { text: '愛之日', link: '/活動/event2' },
            { text: '花之日', link: '/活動/event3' },
            { text: '自然日', link: '/活動/event4' },
            { text: '彩虹日', link: '/活動/event5' },
            { text: '周年慶', link: '/活動/event6' },
            { text: '錦標賽', link: '/活動/event7' },
            { text: '陽光日', link: '/活動/event8' },
            { text: '月光日', link: '/活動/event9' },
            { text: '時尚日', link: '/活動/event10' },
            { text: '萬聖節', link: '/活動/event11' },
            { text: '盛宴日', link: '/活動/event12' },
            { text: '音樂節', link: '/活動/event13' },
            { text: '咖啡日', link: '/活動/event14' },
          ],
        },
      ],
    },
  },
});

