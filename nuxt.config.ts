// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxtjs/google-fonts",
    "nuxt-icon",
    "@nuxt/image-edge",
  ],
  googleFonts: {
    families: {
      Inter: {
        wght: [400, 700],
      },
      Alexandria: {
        wght: 700,
      },
    },
  },
  image: {
    screens: {
      xs: 300,
      sm: 600,
      md: 600,
      lg: 1000,
      xl: 2000,
      xxl: 2000,
      "2xl": 2000,
    },
    providers: {
      ghost: {
        provider: "~/providers/ghost",
      },
    },
  },
  runtimeConfig: {
    ghost_url: process.env.GHOST_URL,
    ghost_content_key: process.env.GHOST_CONTENT_KEY,
  },
});
