
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
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
      provider: {
          type: 'local'
      }
  },
  app: {
    head: {
      title: "Invite Plus",
      link: [
        { rel: "icon", type: "image/svg", href: "/logos/invitations.svg" }
      ]
    }
  },

})
