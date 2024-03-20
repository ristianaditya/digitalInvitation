import { plugins } from "./prettier.config.cjs";

export default {
  ssr: false,
  devtools: { enabled: true },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  css: [
    '~/assets/css/tailwind.css',
    '~/assets/css/feature.css'
  ],
  modules: [
    '@nuxt/ui',
    '@nuxtjs/tailwindcss',
    'nuxt-icon',
    '@sidebase/nuxt-auth',
    '@pinia/nuxt',
    '@vee-validate/nuxt',
    [
      '@nuxtjs/google-fonts',
      {
        families: {
          Lato: true,
          Roboto: true,
          Lora: true,
          Inter: true,
        },
      },
    ],
  ],
  // plugins: [
  //   '~/plugins/midtrans.js'
  // ],
  auth: {
    globalAppMiddleware: true,
  },
  colorMode: {
    preference: 'light'
  },
  app: {
    head: {
      title: "Invite Plus",
      link: [
        { rel: "icon", type: "image/svg", href: "/logos/main_icon.svg" },
        { rel: 'stylesheet', href: 'https://unpkg.com/grapesjs/dist/css/grapes.min.css' },
        { rel: 'stylesheet', href: 'https://unpkg.com/grapesjs-uppy/dist/grapesjs-uppy.min.css' }
      ],
      script: [
        { src: 'https://unpkg.com/grapesjs', body: true },
        { src: 'https://unpkg.com/grapesjs-uppy', body: true },
        { src: 'https://app.sandbox.midtrans.com/snap/snap.js', body: true },
        { src: 'https://cdn.tailwindcss.com', body: true }
      ]
    }
  },
  runtimeConfig: {
    // Public keys that are exposed to the client
    public: {
      baseURLService: process.env.BASE_URL_API_SERVICE,
    }
  },
}
