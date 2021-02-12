import React, { useRef } from 'react';
import { dayInMonth, dayForWeek } from '../services/time';
import CalendarBodyItem from './calendarBodyItem';

const CalendarBody = ( { year, month, startDayWeek, holiday, handleClick, handleMouseOver, handleMouseOut }) => {
  let stopCount = dayInMonth(year, month);
  let buildDays = dayForWeek(year, month, stopCount, startDayWeek, holiday);

  return (
    <div className = 'calendar-body'>
      {
        buildDays.map((week, count) => {
          return (
            <div style = {{ display: 'flex' }} key = { count } className = 'calendar-body-row'>
              { week.map(el => {
                return (
                  <CalendarBodyItem el = { el } key = { el.id } handleClick = { handleClick } handleMouseOver = { handleMouseOver } handleMouseOut = { handleMouseOut } />
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