// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  app: {
    head: {
      title: "Nuxt.js and Bootstrap 5 Web Development",
      meta: [
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { name: "description", content: "Build SSR & SSG Vue and Bs5 apps with Nuxt" },
        { name: "keywords", content: "Vue, Bootstrap 5, Nuxt, SSG, SSR" }
      ],
      link: [
        { rel: "stylesheet", href: "/fontawesome6/css/all.min.css" },
        { rel: "stylesheet", href: "/icons/bootstrap-icons.min.css" },
      ],
      script: [
        { src: "/js/jquery-3.7.0.slim.min.js", type: "text/javascript", async: true, defer: true, tagPosition: "bodyClose" },
        { src: "/js/popper.min.js", type: "text/javascript", async: true, defer: true, tagPosition: "bodyClose" },
        { src: "/js/bootstrap.min.js", type: "text/javascript", async: true, defer: true, tagPosition: "bodyClose" },
      ]
    }
  },
  css: [
    "@/assets/bootstrap.custom.scss",
    "@/assets/style.scss",
  ]
})
