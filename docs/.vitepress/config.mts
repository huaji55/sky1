import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/sky/',  // 確保這是您 GitHub Pages 上的正確 URL 路徑
  title: '光遇資訊',
  description: '提供翻譯後的國際服光遇公告、已知問題、活動公告',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'GitHub ', link: 'https://github.com/huaji55/sky/' },
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
            { text: 'GitHub 專案', link: 'https://github.com/huaji55/sky/' }
          ],
        },
        {
          text: '活動',
          collapsed: true,
          items: [
            { text: '幸運日', link: '/events/days_of_fontune' },
            { text: '愛之日', link: '/events/days_of_love' },
            { text: '花之日', link: '/events/days_of_bloom' },
            { text: '自然日', link: '/events/days_of_nature' },
            { text: '彩虹日', link: '/events/days_of_rainbow' },
            { text: '周年慶', link: '/events/days_of_anniversary' },
            { text: '錦標賽', link: '/events/days_of_competition' },
            { text: '陽光日', link: '/events/days_of_sunlight' },
            { text: '月光日', link: '/events/days_of_moonlight' },
            { text: '時尚日', link: '/events/days_of_fashion' },
            { text: '萬聖節', link: '/events/days_of_halloween' },
            { text: '盛宴日', link: '/events/days_of_feast' },
            { text: '音樂節', link: '/events/days_of_music' },
            { text: '咖啡日', link: '/events/days_of_cafe' },
          ],
        },
      ],
      '/zh/': [
        {
          text: '指南',
          items: [
            { text: '介紹', link: '/zh/introduce' },
            { text: '活动', link: '/zh/events/' },
            { text: '更新说明', link: '/zh/patch-notes' },
            { text: '已知问题', link: '/zh/known-issues' },
            { text: 'GitHub 专案', link: 'https://github.com/huaji55/sky/' }
          ],
        },
        {
          text: '活动',
          collapsed: true,
          items: [
            { text: '幸运日', link: '/zh/events/days_of_fontune' },
            { text: '爱之日', link: '/zh/events/days_of_love' },
            { text: '花之日', link: '/zh/events/days_of_bloom' },
            { text: '自然日', link: '/zh/events/days_of_nature' },
            { text: '彩虹日', link: '/zh/events/days_of_rainbow' },
            { text: '周年庆', link: '/zh/events/days_of_anniversary' },
            { text: '锦标赛', link: '/zh/events/days_of_competition' },
            { text: '阳光日', link: '/zh/events/days_of_sunlight' },
            { text: '月光日', link: '/zh/events/days_of_moonlight' },
            { text: '时尚日', link: '/zh/events/days_of_fashion' },
            { text: '万圣节', link: '/zh/events/days_of_halloween' },
            { text: '盛宴日', link: '/zh/events/days_of_feast' },
            { text: '音乐节', link: '/zh/events/days_of_music' },
            { text: '咖啡日', link: '/zh/events/days_of_cafe' },
          ],
        },
      ],
    },
  },
  // 在 head 部分添加 Google 驗證標籤
  head: [
    ['meta', { name: 'google-site-verification', content: 'Je_FG4On0DGIeS4vhkrMY7hkcJPRFVVT0m0On2ZYxQU' }]
  ]
});
