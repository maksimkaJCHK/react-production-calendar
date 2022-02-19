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
      chunks: 'async',
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
        ]
      }, {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
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
        filename: '../production-calendar.html',
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
    ),
    new HtmlWebpackPlugin(
      {
        filename: '../birthday-schedule.html',
        template: 'templates/birthday_schedule.twig',
        inject: false
      }
    ),
    new HtmlWebpackPlugin(
      {
        filename: '../calendar-reset.html',
        template: 'templates/calendar_reset.twig',
        inject: false
      }
    ),
    new HtmlWebpackPlugin(
      {
        filename: '../calendar-type.html',
        template: 'templates/calendar_type.twig',
        inject: false
      }
    ),
    new HtmlWebpackPlugin(
      {
        filename: '../calendar-without-style.html',
        template: 'templates/calendar_without_style.twig',
        inject: false
      }
    ),
    new HtmlWebpackPlugin(
      {
        filename: '../calendar-dark.html',
        template: 'templates/calendar_dark.twig',
        inject: false
      }
    ),
    new HtmlWebpackPlugin(
      {
        filename: '../calendar-localization.html',
        template: 'templates/calendar_localization.twig',
        inject: false
      }
    ),
    new HtmlWebpackPlugin(
      {
        filename: '../calendar-change-class.html',
        template: 'templates/calendar_change_class.twig',
        inject: false
      }
    )
  ],
})
