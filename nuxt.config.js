export default {
  head: {
    title: 'Nuxt Quark',
    htmlAttrs: {
      lang: 'ru',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'icon', type: 'image/png', href: '/images/favicons/x32.png' },
      { rel: 'apple-touch-icon', href: '/images/favicons/x180.png' },
    ],
  },

  css: ['./assets/styles/index.scss'],

  router: {},

  plugins: [],

  buildModules: [
    '@nuxt/typescript-build',
    '@nuxtjs/stylelint-module',
    '@nuxtjs/style-resources',
    '@nuxtjs/svg',
    'nuxt-windicss',
    '@unocss/nuxt',
  ],

  styleResources: {
    scss: [
      './src/assets/styles/variables.scss',
      './src/assets/styles/mixins.scss',
    ],
  },

  modules: [],

  srcDir: 'src',
  modern: 'client',
  target: 'static',
  telemetry: false,

  build: {},
}
