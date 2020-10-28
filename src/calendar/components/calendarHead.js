import React from 'react';
import { months }  from '../services/month.js';

const CalendarHead = ({ lang, year, month, visibleYear }) => {
  let curMonths = [ ...months[lang.toLowerCase()] ];
  let curDate = new Date(year, month);
  let curMonth = curMonths[curDate.getMonth()];
  let calYear = visibleYear ? curDate.getFullYear() : '';
  
  return (
    <div className = "calendar-head">
      { curMonth } { calYear }
    </div>
  )
}

export default CalendarHead;