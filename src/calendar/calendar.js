import React from 'react';
import CalendarHead from './components/calendarHead';
import CalendarDay  from './components/calendarDay';
import CalendarBody from './components/calendarBody';
import { monthClass } from './services/monthClass';
import './styles/calendar.scss';

const Calender = (props) => {
  let { lang = 'ru', year = '2020', month = '1', visibleYear =  true, startDayWeek = 1, holiday = []} = props;

  let calMonth = month - 1;
  let calendarClass = `calendar ${monthClass[calMonth]}`;

  return (
    <div className = { calendarClass }>
      <CalendarHead lang = { lang } year = { year } month = { calMonth } visibleYear = { visibleYear }  />
      <CalendarDay startDayWeek = { startDayWeek } lang = { lang } />
      <CalendarBody startDayWeek = { startDayWeek } year = { year } month = { calMonth } holiday = { holiday } />
    </div>
  )
}

export default Calender;