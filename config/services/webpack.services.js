module.exports = {
  module: {
    rules: [
      {
        test: /\.js|.jsx?$/,
        exclude: /(node_modules)/,
        use: ["babel-loader"]
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      }, {
        test: /\.scss$/,
        use: [
          "style-loader",
          "css-loader",
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
}