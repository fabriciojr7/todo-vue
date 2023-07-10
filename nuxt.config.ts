// https://nuxt.com/docs/api/configuration/nuxt-config
import type { NuxtConfig } from '@nuxt/types'

const defineNuxtConfig: NuxtConfig = {
  buildModules: ['@nuxt/typescript-build'],
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: [
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
  ],
  pinia: {
    autoImports: [
      // automatically imports `defineStore`
      'defineStore', // import { defineStore } from 'pinia'
      ['defineStore', 'definePiniaStore'], // import { defineStore as definePiniaStore } from 'pinia'
    ],
  },
}

export default defineNuxtConfig