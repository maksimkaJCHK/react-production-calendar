import React from 'react';
import { dayInMonth, dayForWeek } from '../services/time';
import CalendarBodyItem from './calendarBodyItem';

const CalendarBody = ({
  year,
  month,
  startDayWeek,
  holiday,
  handleClick,
  handleMouseOver,
  handleMouseOut
}) => {
  const stopCount = dayInMonth(year, month);

  const buildDays = dayForWeek({
    year,
    month,
    holiday,
    startDayWeek,
    stopDay: stopCount,
  });

  return (
    <div className = 'calendar-body'>
      {
        buildDays.map((week, count) => {
          return (
            <div
              key = { count }
              className = 'calendar-body-row'
            >
              { week.map(el => {
                return (
                  <CalendarBodyItem
                    el = { el }
                    key = { el.id }
                    handleClick = { handleClick }
                    handleMouseOver = { handleMouseOver }
                    handleMouseOut = { handleMouseOut }
                  />
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