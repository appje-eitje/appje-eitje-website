export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Appje Eitje',
    htmlAttrs: {
      lang: 'nl'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'We develop high quality, accessible front-end applications, software and websites.' },
      { name: 'format-detection', content: 'telephone=no' },
      { property: 'og:image', content: 'https://appje-eitje.nl/appje-eitje.jpg' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'apple-touch-icon', size: '180x180', href: '/apple-touch-icon.png' },
      { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
      { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
      { rel: 'manifest', href: '/site.webmanifest' },
      { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#5bbad5' },
      { rel: 'canonical', href: 'https://appje-eitje.nl' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/css/main.css',
    '~/assets/css/reset.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    [
      '@nuxtjs/i18n',
      {
        locales: ['en', 'nl'],
        defaultLocale: 'nl',
        vueI18n: {
          fallbackLocale: 'nl',
          messages: {
            nl: {
              contact: 'Neem direct contact op',
              'what-we-do': 'Wij verzorgen kwalitatieve, toegankelijke front-end toepassingen: software, applicaties en websites.',
              'your-idea': 'Naast het ontwikkelen van eigen software, staan wij ook klaar om uw idee tot een succes te maken.'
            },
            en: {
              contact: 'Contact us now',
              'what-we-do': 'We develop high quality, accessible front-end applications, software and websites.',
              'your-idea': 'Besides developing our own software applications, we are also available to make your idea a success.'
            }
          }
        }
      }
    ]
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
