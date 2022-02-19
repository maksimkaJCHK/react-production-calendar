import React from 'react';
import CalendarHead from './components/calendarHead.js';
import CalendarDay  from './components/calendarDay.js';
import CalendarBody from './components/calendarBody.js';
import { monthClass } from './services/monthClass';

const Calender = (props) => {
  let { lang = 'ru', year = '2022', month = '1', visibleYear =  true, startDayWeek = 1, calClass = '', holiday = [], handleClick = () => null, handleMouseOver = () => null, handleMouseOut = () => null } = props;

  let calMonth = month - 1;
  let calendarClass = `calendar ${monthClass[calMonth]} ${calClass}`;

  return (
    <div className = { calendarClass }>
      <CalendarHead lang = { lang } year = { year } month = { calMonth } visibleYear = { visibleYear }  />
      <CalendarDay startDayWeek = { startDayWeek } lang = { lang } />
      <CalendarBody startDayWeek = { startDayWeek } year = { year } month = { calMonth } holiday = { holiday } handleClick = { handleClick } handleMouseOver = { handleMouseOver } handleMouseOut = { handleMouseOut } />
    </div>
  )
}

export default Calender;