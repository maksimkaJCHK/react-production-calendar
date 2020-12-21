const paths = require('./paths')

module.exports = {
  entry: [paths.src + '/index.js'],
  output: {
    path: paths.build,
    filename: 'main.js',
  },
  target: ['web', 'es5'],
}
