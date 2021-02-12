import React, { useRef } from 'react';

const CalendarBodyItem = ({ el, handleMouseOut, handleMouseOver, handleClick }) => {
  let selfRef = useRef();

  return (
    <div style = {{ width: '14.28571428571429%' }} className = { el.className.join(' ') } key = { el.id } onClick = { () => handleClick(el.time, selfRef) } onMouseOver = { () => handleMouseOver(el.time, selfRef) } onMouseOut = { () => handleMouseOut(el.time, selfRef) } ref = { selfRef }>
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
}

export default CalendarBodyItem;