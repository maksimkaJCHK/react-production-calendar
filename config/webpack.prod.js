const { merge } = require('webpack-merge')
const common = require('./services/webpack.common.js')
const services = require('./services/webpack.services.js')
const TerserPlugin = require('terser-webpack-plugin')

module.exports = merge(common, services, {
  mode: 'production',
  devtool: false,
  optimization: {
    minimize: true,
    usedExports: true,
    minimizer: [new TerserPlugin({
      test: /\.js|.jsx?$/,
      parallel: true,
      extractComments: true,
      terserOptions: {
        output: {
          comments: false,
        },
        compress: {
          drop_console: true,
        },
      }
    })],
    splitChunks: {
      chunks: 'all',
      minSize: 134_000,
      minRemainingSize: 0,
      maxSize: 280_000,
      minChunks: 1,
      maxAsyncRequests: 30,
      maxInitialRequests: 30,
      automaticNameDelimiter: '-',
      enforceSizeThreshold: 50000,
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name(module, chunks, cacheGroupKey) {
           const allChunksNames = chunks.map((item) => item.name).join('-');
            return `common`;
          },
          chunks: 'all'
        },
        defaultVendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
          reuseExistingChunk: true
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true
        }
      }
    }
  },
})
