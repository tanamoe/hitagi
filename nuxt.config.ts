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
    "/": { prerender: true, isr: 600 },
    // archive-related pages re-validate every 30 minutes
    "/archives/**": { isr: 1800 },
    "/author/**": { isr: 1800 },
    "/tags/**": { isr: 1800 },
    // post re-validate every 1 hour
    "/posts/**": { isr: 3600 },
    // add cors headers on API routes, and cache for 30 mins
    "/api/**": { isr: 1800, cors: true },
  },
  runtimeConfig: {
    ghost_url: process.env.GHOST_URL,
    ghost_content_key: process.env.GHOST_CONTENT_KEY,
    public: {
      siteUrl: process.env.NUXT_PUBLIC_SITE_URL,
      umamiUrl: process.env.UMAMI_URL,
      umamiSiteId: process.env.UMAMI_SITE_ID,
    },
  },
  // TODO: remove this in the future after Netlify done fixing.
  // ref: https://answers.netlify.com/t/javascript-heap-out-of-memory-when-trying-to-build-a-nuxt-app/93138/13
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
      cssnano:
        process.env.NODE_ENV === "production"
          ? { preset: ["default", { discardComments: { removeAll: true } }] }
          : false, // disable cssnano when not in production
    },
  },
});
