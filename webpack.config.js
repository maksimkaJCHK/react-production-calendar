const TerserPlugin = require('terser-webpack-plugin');

let conf = {
  output: {
    path: __dirname+'/public/js/',
    filename: 'main.js',
    publicPath: 'js/'
  },
  devServer: {
    overlay: true,
    contentBase: './public'
  },
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin({
      cache: true,
      extractComments: true,
      terserOptions: {
        output: {
          comments: false,
        },
        extractComments: 'all',
        compress: {
          drop_console: true,
        },
      },
    })],
  },
  module: {
    rules: [
      {
        test: /\.js|.jsx?$/,
        exclude: /(node_modules)/,
        loaders: ["babel-loader"]
      }, {
        test: /\.css$/,
        exclude: /(node_modules)/,
        use: [
          'style-loader',
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
          "style-loader",
          "css-loader",
          {
            loader: "postcss-loader",
            options: {config: {path: 'postcss.config.js'}}
          },
          "sass-loader" 
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
};

module.exports = (env, options) => {
  let production = options.mode === "production";
  conf.devtool = production
    ? false
    : 'eval-sourcemap'
  return conf;
};