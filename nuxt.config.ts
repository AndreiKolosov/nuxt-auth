// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  telemetry: false,
  typescript: {shim: false},
  app: {
    head: {
      htmlAttrs: {
        lang: 'ru'
      }
    }
  },
  css: ['~/assets/global.css'],
})
