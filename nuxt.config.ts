// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: [
    '@nuxt/content'
  ],
  app: {
    head: {
      link: [
        { rel: 'icon', type: 'image/png', href: '/favicon.png?v=1' },
      ],
    },
  },
})
