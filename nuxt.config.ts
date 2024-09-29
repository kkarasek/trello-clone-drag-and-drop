// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@vueuse/nuxt'],
  ssr: false,
  app: {
		head: {
			title: 'Nuxt Trello Clone',
			htmlAttrs: {
				lang: 'en'
			}
		},
	},
})
