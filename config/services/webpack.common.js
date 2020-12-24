const paths = require('./paths')

module.exports = {
  entry: {
    main: [paths.src + '/index.js'],
    productionCalendar: [paths.src + '/production_calendar.js']
  },
  output: {
    path: paths.build,
    filename: '[name].js',
  },
  //target: ['web', 'es5'],
  target: 'web'
}
