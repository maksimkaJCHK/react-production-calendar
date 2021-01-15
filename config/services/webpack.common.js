const paths = require('./paths')

module.exports = {
  entry: {
    main: [paths.src + '/examples/main.js'],
    productionCalendar: [paths.src + '/examples/production_calendar.js'],
    seasons: [paths.src + '/examples/seasons.js'],
    birthdaySchedule: [paths.src + '/examples/birthday_schedule.js'],
  },
  output: {
    path: paths.build,
    filename: '[name].js',
  },
  target: ['web', 'es5'],
  //target: 'web'
}
