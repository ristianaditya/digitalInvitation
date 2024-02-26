/** @type {import('tailwindcss').Config} */
export default {
  content: ['components/**/*.{vue,js}',
    'layouts/**/*.vue',
    'pages/**/*.vue',
    'composables/**/*.{js,ts}',
    'plugins/**/*.{js,ts}',
    'App.{js,ts,vue}',
    'app.{js,ts,vue}'],
  theme: {
    extend: {
      fontFamily: {
        lato: ['Lato', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
        lora: ['Lora', 'serif'],
        inter: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [
    require("tailwindcss-animated"),
    require('daisyui'),
    require('tailwind-typewriter')({
      wordsets: {
          textHome: {
              words: ['Together', 'Anywhere'],
              pauseBetween: 4
          }
      }
  }),
  ],
}

