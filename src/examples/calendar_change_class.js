import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import Calendar from '../index';
import holiday from '../holidays/holiday';

import '../../lib/styles/calendar.css';
import './pages/exampleCalendar.scss';
import './pages/calendarChangeClass.scss'

const node = document.getElementById('app');
const root = ReactDOM.createRoot(node);

const ExampleCalendar = () => {

  let [ dayWeek, setDayWeek ] = useState(1);
  let [ month, setMonth ] = useState((new Date()).getMonth() + 1);
  let [ calClass, setCalClass] = useState('');

  const changeDayWeek = () => {
    setDayWeek(prevVal => {
      return prevVal == 1 ? 0 : 1
    });
  }

  const imcMonth = () => {
    setMonth(prevVal => prevVal - 1);
  }

  const decMonth = () => {
    setMonth(prevVal => prevVal + 1);
  }

  const onMouseOver = (time, el) => {
    let topOffset = el.current.offsetTop;
    let hWindow = window.innerHeight;
    let sWind = window.pageYOffset;
    let hItem = el.current.offsetHeight;
    let indent = 100;

    let calcWindParam = hWindow + sWind;
    let calcItemParam = topOffset + hItem + indent;

    if(calcItemParam > calcWindParam) {
      setCalClass('topHint');
    }
  }

  const onMouseOut = () => {
    setCalClass('');
  }

  return (
    <div className = 'exampleCalendar'>
      <button className = 'mdc-button' onClick = { imcMonth }>Уменьшить месяц</button>
      <button className = 'mdc-button' onClick = { changeDayWeek }>Изменить начальный день недели</button>
      <button className = 'mdc-button' onClick = { decMonth }>Увеличить месяц</button>
      <div className = 'exampleCalendar-wrap'>
        <Calendar
          lang = 'ru'
          year = {2023}
          month = { month }
          visibleYear = { true }
          startDayWeek = { dayWeek }
          holiday = { holiday }
          calClass = { calClass }
          handleMouseOver = { onMouseOver }
          handleMouseOut = { onMouseOut }
        />
      </div>
    </div>
  )
}

root.render(<ExampleCalendar />);