// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["nuxt-swiper", "@nuxtjs/tailwindcss", "@nuxtjs/google-fonts"],
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
  runtimeConfig: {
    ghost_url: process.env.GHOST_URL,
    ghost_content_key: process.env.GHOST_CONTENT_KEY,
  },
});
