module.exports = {

  // target: 'static',

  // router: {
  //   base: '/Eclipssis-rtiget_main_and_landing'
  // },
  /*
  ** Headers of the page
  */
  head: {
    title: 'rtiger_landing',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },

  axios: {
    baseURL: "http://testrtiger3.rlion.org/api"
  },

  modules: [
    '@nuxtjs/axios',
  ],

  plugins: [
    { src: '~/plugins/modal', ssr: false },
    { src: '~/plugins/vuelidate', ssr: false },
    { src: '~/plugins/vue-carousel', mode: 'client' },
    { src: './plugins/slick-slider.js' },
    '~plugins/range-slider.js'
  ],

  css: [
    '@/assets/css/main.sass' // из проекта
  ],

  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }

      if(!isDev) {
        config.output.publicPath = '_nuxt/'
      }
    }
  },

  // router: {
  //   base: '/<repository-name>/'
  // },

  generate: {
    // dir: 'rt'
    // routes() {
    //   const articlesCount = 50000
    //   const articlesList = []
      
    //   for (let index = 0; index < articlesCount; index++) {
    //     const article = {
    //       id: index,
    //       title: 'Article',
    //       text: 'Some article text like lorem ipsum dolar'
    //     }
    //     articlesList.push(article)
    //   }

    //   return articlesList.map(article => `articles/${article.id}`);
    // }
  }
}

