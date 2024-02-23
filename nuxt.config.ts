/* eslint-disable no-console */
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  telemetry: false,

  $development: {
    typescript: {
      strict: true,
      typeCheck: true,
    },

    devtools: {
      enabled: false,
    },

    devServer: {
      port: parseInt(process.env.DEV_SERVER_PORT || '9090'),
    },
  },

  $production: {
    typescript: {
      strict: true,
      typeCheck: false,
    },
  },

  // 렌더링 모드
  ssr: false,

  //
  components: [
    {
      path: '~/components',
      pathPrefix: false,
    },
  ],

  modules: [
    // eslint
    '@nuxtjs/eslint-module',

    // vueuse nuxt module
    '@vueuse/nuxt',

    // basic css framework
    '@nuxtjs/tailwindcss',

    // dayjs nuxt module
    'dayjs-nuxt',

    // color mode module
    '@nuxtjs/color-mode',

    // nuxt icon module
    'nuxt-icon',

    // pinia nuxt module
    '@pinia/nuxt',

    // pinia persist module
    '@pinia-plugin-persistedstate/nuxt',

    // lodash nuxt module
    'nuxt-lodash',

    // ui element-plus library
    '@element-plus/nuxt',
  ],

  imports: {
    dirs: [
      // 저장소
      'stores/**',
      // 유틸리티용
      'utils/**',
    ],
  },

  build: {},

  postcss: {
    plugins: {
      'postcss-import': {},
      'tailwindcss/nesting': {},
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  eslint: {
    lintOnStart: false,
  },

  tailwindcss: {
    configPath: '~~/tailwind.config',
    exposeConfig: true,
    injectPosition: 'first',
    viewer: true,
  },

  dayjs: {
    locales: ['ko', 'en'],
    plugins: [
      'advancedFormat',
      'customParseFormat',
      'isoWeek',
      'objectSupport',
      'quarterOfYear',
      'timezone',
      'weekOfYear',
    ],
    defaultLocale: 'ko',
    defaultTimezone: 'Asia/Seoul',
  },

  colorMode: {
    preference: 'system',
    fallback: 'light',
    hid: 'nuxt-color-mode-script',
    globalName: '__NUXT_COLOR_MODE__',
    classPrefix: '',
    classSuffix: '',
    storageKey: 'nuxt-color-mode',
  },

  lodash: {
    exclude: ['every', 'max', 'mean', 'min', 'some', 'sum'],
  },

  pinia: {
    autoImports: ['defineStore', 'storeToRefs'],
  },

  piniaPersistedstate: {
    debug: true,
    cookieOptions: {
      sameSite: 'strict',
    },
    storage: 'sessionStorage',
  },

  app: {
    baseURL: '/',
    head: {
      htmlAttrs: {
        lang: 'ko',
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'Author', content: 'SEORA CHOI' },
        { name: 'description', content: "SEORA'S BLOG" },
      ],
    },
  },

  css: [
    // main css
    '~/assets/css/main.css',
  ],
});
