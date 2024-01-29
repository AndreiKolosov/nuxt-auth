// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  telemetry: false,
  typescript: { shim: false },
  app: {
    head: {
      htmlAttrs: {
        lang: 'ru',
      },
    },
  },
  runtimeConfig: {
    public: {
      apiUrl: 'http://localhost:3000/',
    },
  },
  css: ['~/assets/global.css'],
  routeRules: {
    // '/contacts': { prerender: true },
  },
});
