// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    imports: {
        dirs: ["store", "types"],
    },
    css: ["@/assets/styles/main.less"],
    modules: [
        ["nuxt-icon"],
        ["@vueuse/nuxt"],
        ["@nuxt/image-edge"],
        [
            "@pinia/nuxt",
            {
                autoImports: [
                    'storeToRefs',
                    // automatically imports `defineStore`
                    "defineStore", // import { defineStore } from 'pinia'
                    // automatically imports `defineStore` as `definePiniaStore`
                    ["defineStore", "definePiniaStore"], // import { defineStore as definePiniaStore } from 'pinia'
                ],
            },
        ],
    ],
    runtimeConfig: {
        public: {
            strapi: {
                url: process.env.STRAPI_URL || "http://localhost:1337",
                key: process.env.API_KEY,
            },
        },
    },
    vite: {
        css: {
            preprocessorOptions: {
                less: {
                    additionalData: `@import "@/assets/styles/_var.less" ;@import "@/assets/styles/_mixins.less" ;`,
                },
            },
        },
    },

})
