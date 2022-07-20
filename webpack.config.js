'use strict';
// Webpack：https://www.yuque.com/easy-team/easywebpack
// Egg Vue: https://www.yuque.com/easy-team/egg-vue
const {VueLoaderPlugin } = require('vue-loader');
const vueLoaderConfig = require('./vue-loader.conf');
const path = require('path');
// const VueLoaderPlugin = require('vue-loader/lib/plugin')
function resolve(dir) {
  // console.log(path.join(__dirname, '..', dir))
  return path.join(__dirname, dir);
}

module.exports = {
  context: path.resolve(__dirname),
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      '@': resolve('app/web/'),
    },
  },
  module: {
    rules: [
      // {
      //   test: /\.vue$/,
      //   loader: 'vue-loader',
      //   options: vueLoaderConfig,
      // },
      {
        test: /\.scss$/,
        use: [
          'vue-style-loader',
          'css-loader',
          'sass-loader',
          // 'postcss-loader'
        ]
      },
      {
        test: /\.md$/,
        use: require('./MarkdownLoader')
      },
    ]
  },
  plugins:[
    // new VueLoaderPlugin(),
  ],
  // cdn: 'http://test.cdn.com',
  done() {
    console.log('done!', {
      NODE_ENV: process.env.NODE_ENV || '',
      EGG_SERVER_ENV: process.env.EGG_SERVER_ENV || '',
    });
  }
};
