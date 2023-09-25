// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: ['@samk-dev/nuxt-uikit3'],
  uikit3: {
    js: true,
    icons: true
  }
})
