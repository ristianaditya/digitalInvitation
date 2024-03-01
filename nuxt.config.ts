export default {
  ssr: false,
  devtools: { enabled: true },
  css: [
    '~/assets/css/tailwind.css',
    '~/assets/css/feature.css'
  ],
  modules: [
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
  auth: {
    globalAppMiddleware: true,
  },
  app: {
    head: {
      title: "Invite Plus",
      link: [
        { rel: "icon", type: "image/svg", href: "/logos/main_icon.svg" }
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
