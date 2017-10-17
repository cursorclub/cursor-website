const webpack = require('webpack');

module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    link: [
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Montserrat:400,700|Droid+Serif:400,700,400italic,700italic|Roboto+Slab:400,100,300,700' }
    ]
  },
  manifest: {
    name: 'Cursor',
    short_name: 'Cursor'
  },
  plugins: [{ src: 'bootstrap', ssr: false },  { src: '~/plugins/theme', ssr: false }],
  modules: ['@nuxtjs/font-awesome', '@nuxtjs/icon', '@nuxtjs/meta', '@nuxtjs/manifest'],
  css: [
    '~/assets/style/theme.css',
    '~/assets/style/bootstrap.scss'
  ],
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#3d3356' },
  /*
  ** Build configuration
  */
  build: {
    vendor: ['jquery', 'popper.js', 'bootstrap'],
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
  }
}
