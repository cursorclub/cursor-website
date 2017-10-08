const webpack = require('webpack');

module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'Cursor',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Website for Cursor' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Montserrat:400,700|Kaushan+Script|Droid+Serif:400,700,400italic,700italic|Roboto+Slab:400,100,300,700' }
    ]
  },
  plugins: [{ src: 'bootstrap', ssr: false }, { src: 'font-awesome-webpack', ssr: false },  { src: '~/plugins/theme', ssr: false }],
  css: [
    '~/assets/style/bootstrap.scss',
    '~/assets/style/theme.css'
  ],
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    vendor: ['jquery', 'popper.js', 'bootstrap', 'font-awesome-webpack'],
    postCSS: [
      require('precss'),
      require('autoprefixer')
    ],
    extractCSS: true,
    plugins: [
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        'window.jQuery': 'jquery',
        Popper: ['popper.js', 'default']
      })
    ],
    /*
    ** Run ESLINT on save
    */
    extend (config, ctx) {
      if (ctx.dev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  router: {
    base: 'cursor-website'
  }
}
