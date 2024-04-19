import React from 'react';
import CalendarHead from './components/calendarHead.js';
import CalendarDay  from './components/calendarDay.js';
import CalendarBody from './components/calendarBody.js';
import { monthClass } from './services/monthClass';

import { dayInMonth, dayForWeek } from './services/time';

const Calender = (props) => {
  const {
    lang = 'ru',
    year = '2024',
    month = '1',
    visibleYear =  true,
    startDayWeek = 1,
    calClass = '',
    holiday = [],
    verticalDay = false,
    handleClick = () => null,
    handleMouseOver = () => null,
    handleMouseOut = () => null
  } = props;

  const calMonth = month - 1;

  const stopCount = dayInMonth(year, calMonth);
  const days = dayForWeek({
    year,
    month: calMonth,
    holiday,
    startDayWeek,
    verticalDay,
    stopDay: stopCount,
  });

  const calendarClass = `calendar ${monthClass[calMonth]} ${calClass}`;
  const typeDayDisplay = verticalDay ? 'vertical' : 'horisontal';
  let calDayDisplay = `calendar-day-display-${typeDayDisplay}`;

  if (verticalDay) calDayDisplay += ` calendar-day-display-size-${days[0].length}`;

  return (
    <div className = { calendarClass }>
      <CalendarHead
        lang = { lang }
        year = { year }
        month = { calMonth }
        visibleYear = { visibleYear }
      />
      <div className = { calDayDisplay }>
        <CalendarDay
          startDayWeek = { startDayWeek }
          lang = { lang }
        />
        <CalendarBody
          days = { days }
          handleClick = { handleClick }
          handleMouseOver = { handleMouseOver }
          handleMouseOut = { handleMouseOut }
        />
      </div>
    </div>
  )
}

export default Calender;