const paths = require('./services/paths')

const webpack = require('webpack')
const { merge } = require('webpack-merge')
const common = require('./services/webpack.common.js')
const services = require('./services/webpack.services.js')

module.exports = merge(common, services, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    historyApiFallback: true,
    contentBase: paths.public,
    open: true,
    compress: true,
    hot: true,
    port: 8080,
    publicPath: '/js/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ]
})
