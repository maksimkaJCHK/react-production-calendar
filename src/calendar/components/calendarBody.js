import React from 'react';
import { dayInMonth, dayForWeek } from '../services/time';

const CalendarBody = ( { year, month, startDayWeek, holiday, handleClick, handleMouseOver, handleMouseOut }) => {
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
                  <div className = { el.className.join(' ') } key = { el.id } onClick = { () => handleClick(el.time) } onMouseOver = { () => handleMouseOver(el.time) } onMouseOut = { () => handleMouseOut(el.time) }>
                    <div className = 'calendar-body-day'>
                      { el.day }
                    </div>
                    { el.hint.length
                     ? el.hint.map((el, count) => {
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
                      : null
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