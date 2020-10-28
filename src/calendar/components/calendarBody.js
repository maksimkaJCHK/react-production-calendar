import React from 'react';
import { dayInMonth, dayForWeek } from '../services/time';

const CalendarBody = ( { year, month, startDayWeek, holiday }) => {
  let stopCount = dayInMonth(year, month);

  let buildDays = dayForWeek(year, month, stopCount, startDayWeek, holiday);

  return (
    <div className = 'calendar-body'>
      {
        buildDays.map((week, count) => {
          return (
            <div key = { count } className = 'calendar-body-row'>
              { week.map(el => {

                return (
                  /*<div className = 'calendar-body-col' key = { el.id }>{ el.day }</div>*/
                  <div className = { el.className.join(' ') } key = { el.id }>
                    <div className = 'calendar-body-day'>
                      { el.day }
                    </div>
                    { el.hint.map((el, count) => {
                        return (
                          <div className = 'calendar-body-hint' key = { count }>
                            <div className = 'calendar-body-title'>
                              { el.title }
                            </div>
                            <div className = 'calendar-body-desc'>
                              { el.desc }
                            </div>
                          </div>
                        )
                      })
                    }
                  </div>
                )
              }) }
            </div>
          )
        })
      }
    </div>
  )
}

export default CalendarBody;