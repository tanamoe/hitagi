// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["nuxt-swiper", "@nuxtjs/tailwindcss", "@nuxtjs/google-fonts"],
  googleFonts: {
    families: {
      Inter: true,
      "Reem+Kufi+Fun": {
        wght: 700,
      },
    },
  },
  runtimeConfig: {
    public: {
      ghost_url: process.env.GHOST_URL,
      ghost_content_key: process.env.GHOST_CONTENT_KEY,
    },
  },
});
