// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: [
    '@pinia/nuxt', // Required
    // '@pinia-plugin-persistedstate/nuxt', // deprecated
  ],
  plugins: [
    '~/plugins/piniaPersistedState.js'
  ]
})
