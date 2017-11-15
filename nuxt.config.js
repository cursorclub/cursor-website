const webpack = require('webpack');
const path = require('path');

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
  'google-analytics': {
    id: 'UA-109689758-1'
  },
  plugins: [{ src: 'bootstrap', ssr: false },  { src: '~/plugins/theme', ssr: false }],
  modules: ['@nuxtjs/font-awesome', '@nuxtjs/icon', '@nuxtjs/meta', '@nuxtjs/manifest', '@nuxtjs/google-analytics'],
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
    ** Add a few loaders
    */
    extend (config, ctx) {
      // Disable url-loader
      const rule = config.module.rules.find(r => r.test.toString() === '/\\.(png|jpe?g|gif|svg)$/');
      config.module.rules.splice(config.module.rules.indexOf(rule), 1);

      // Add it again, but now without 'static/humans' and 'assets/backgrounds'
      config.module.rules.push({
        test: /\.(png|jpe?g|gif|svg)$/,
        loader: 'url-loader',
        exclude: [path.resolve(__dirname, 'static/humans'), path.resolve(__dirname, 'assets/backgrounds')],
        query: {
          limit: 1000, // 1KB
          name: 'img/[name].[hash:7].[ext]',
        }
      });

      // Compress profile photos
      config.module.rules.push({
        test: /\.jpg$/i,
        loader: 'advanced-image-loader',
        include: [path.resolve(__dirname, 'static/humans')],
        options: {
          width: 225,
          quality: 85,
          srcset: [225, 450, 900, 'original']
        }
      })

      // Compress backgrounds
      config.module.rules.push({
        test: /\.jpg$/i,
        loader: 'advanced-image-loader',
        include: [path.resolve(__dirname, 'assets/backgrounds')],
        options: {
          width: 'original',
          quality: 85
        }
      })

      // Run ESLINT on save
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
