import React from 'react';
import { days } from '../services/days';

const CalendarDay = ( { startDayWeek, lang } ) => {
  let calDay = [ ...days[lang] ];
  let curDays = (startDayWeek == 0) ? [ ...calDay.slice(6), ...calDay.slice(0, 6)] : calDay;

  return (
    <div style = {{ display: 'flex' }} className = 'calendar-day'>
      {
        curDays.map((el, count) => {
          return (
            <div style = {{ width: '14.28571428571429%' }} className = 'calendar-day-col' key = { count }>
              { el }
            </div>
          )
        })
      }
    </div>
  )
}

export default CalendarDay;