const { merge } = require('webpack-merge')
const common = require('./services/webpack.common.js')

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(common, {
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
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000,
  },
  module: {
    rules: [
      {
        test: /\.js|.jsx?$/,
        exclude: /(node_modules)/,
        use: ["babel-loader"]
      },
      {
        test: /\.css$/,
        exclude: /(node_modules)/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: "postcss-loader",
            options: {
              config: {path: 'postcss.config.js'},
            }
          }
        ]
      }, {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          {
            loader: "postcss-loader",
          },
          "sass-loader" 
        ]
      }, {
        test: /\.twig$/,
        use: [
          'raw-loader',
          'twig-html-loader'
        ]
      }, {
        test: /\.(png|jpg|gif|svg)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
              esModule: false,
            },
          },
        ],
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '../css/[name].css',
      chunkFilename: '[id].css',
    }),
    new HtmlWebpackPlugin(
      {
        filename: '../index.html',
        template: 'templates/index.twig',
        inject: false
      },
    ),
    new HtmlWebpackPlugin(
      {
        filename: '../production_calendar.html',
        template: 'templates/production_calendar.twig',
        inject: false
      }
    ),
    new HtmlWebpackPlugin(
      {
        filename: '../seasons.html',
        template: 'templates/seasons.twig',
        inject: false
      }
    )
  ],
})
