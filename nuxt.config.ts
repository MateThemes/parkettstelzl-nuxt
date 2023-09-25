// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: [
    '@samk-dev/nuxt-uikit3',
    '@nuxtjs/google-fonts',
  ],
  uikit3: {
    css: {
      coreCss: false,
      coreTheme: false,
      build: {
        preprocessor: 'scss',
        stylesPath: '~/assets/styles/app.scss', // our main scss entrypoint
        //variablesPath: '~/assets/styles/variables.scss' // this is optional. set it if you want to access variables inside .vue files
      }
    },
    js: true,
    icons: true
  }
})
