const paths = require('./paths')

module.exports = {
  entry: {
    main: [paths.src + '/examples/main.js'],
    productionCalendar: [paths.src + '/examples/production_calendar.js'],
    seasons: [paths.src + '/examples/seasons.js'],
    birthdaySchedule: [paths.src + '/examples/birthday_schedule.js'],
    calendarReset: [paths.src + '/examples/calendar_reset.js'],
    calendarType: [paths.src + '/examples/calendar_type.js'],
    calendarWithoutStyle: [paths.src + '/examples/calendar_without_style.js'],
  },
  output: {
    path: paths.build,
    filename: '[name].js',
  },
  target: ['web', 'es5'],
  //target: 'web'
}
