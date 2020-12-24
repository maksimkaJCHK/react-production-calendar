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
      test: /\.js(\?.*)?$/i,
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
      chunks: 'async',
      minSize: 134000,
      minRemainingSize: 0,
      maxSize: 0,
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
            return `${cacheGroupKey}-${allChunksNames}`;
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
