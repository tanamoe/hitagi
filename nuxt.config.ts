// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    pageTransition: { name: "page", mode: "out-in" },
  },
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxtjs/google-fonts",
    "nuxt-icon",
    "@nuxt/image",
    "nuxt-simple-sitemap",
    "nuxt-simple-robots",
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
  routeRules: {
    // homepage re-validate every 10 minutes
    "/": { isr: 600 },
    // archive-related pages re-validate every 30 minutes
    "/archives/**": { isr: 1800 },
    "/author/**": { isr: 1800 },
    "/tags/**": { isr: 1800 },
    // post re-validate every 1 hour
    "/posts/**": { isr: 3600 },
  },
  runtimeConfig: {
    ghost_url: process.env.GHOST_URL,
    ghost_content_key: process.env.GHOST_CONTENT_KEY,
    public: {
      siteUrl: process.env.NUXT_PUBLIC_SITE_URL,
    },
  },
});
