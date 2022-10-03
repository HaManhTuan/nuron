export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "nuron",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href: "https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css",
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    "~assets/css/main.css",
    "~assets/css/iconfont.css",
    "~assets/css/style.css",
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [{ src: "~/plugins/vue-slick-carousel", mode: "client" }],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,
  publicRuntimeConfig: {
    baseURL: process.env.BASE_URL,
  },
  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    "@nuxtjs/style-resources",
    "@nuxtjs/eslint-module",
    "@nuxtjs/dotenv",
  ],

  styleResources: {
    scss: [
      "~assets/scss/mixins.scss",
      "~assets/scss/variables.scss",
      "~assets/scss/app.scss",
    ],
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
};
