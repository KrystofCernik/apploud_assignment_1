
export default defineNuxtConfig({
    modules: [
        '@nuxtjs/tailwindcss',
        '@nuxtjs/html-validator'
    ],
    css: [
        '~/assets/styles/main.scss'
    ],
    tailwindcss: {
        cssPath: '~/assets/styles/tailwind.css'
    }
})
