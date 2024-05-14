// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  typescript: {
    typeCheck: true
  },
  css: [
    "@/assets/global.scss",
    'primevue/resources/themes/aura-light-green/theme.css',
    'primeicons/primeicons.css'
  ],
  modules: [
    'nuxt-primevue'
  ],
  primevue: {
    /* Options */
    components: {
      prefix: 'Prime',
      // include: ['Skeleton', 'Button', ''],
    }
  }
})
