import React from 'react';
import CalendarBodyItem from './CalendarBodyItem';

const CalendarBody = ({
  days,
  handleClick,
  handleMouseOver,
  handleMouseOut
}) => {
  return (
    <div className = 'calendar-body'>
      {
        days.map((week, count) => {
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