import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import Calendar from '../index';
import holiday from '../holidays/holiday';

import './pages/exampleCalendar.scss';

const node = document.getElementById('app');
const root = ReactDOM.createRoot(node);

const ExampleCalendar = () => {
  let [ dayWeek, setDayWeek ] = useState(1);
  let [ month, setMonth ] = useState(1);

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

  return (
    <div className = 'exampleCalendar'>
      <button className = 'mdc-button' onClick = { imcMonth }>Уменьшить месяц</button>
      <button className = 'mdc-button' onClick = { changeDayWeek }>Изменить начальный день недели</button>
      <button className = 'mdc-button' onClick = { decMonth }>Увеличить месяц</button>
      <div className = 'exampleCalendar-wrap'>
        <Calendar
          lang = 'ru'
          year = { 2023 }
          month = { month }
          visibleYear = { true }
          startDayWeek = { dayWeek }
          holiday = { holiday }
        />
      </div>
    </div>
  )
}

root.render(<ExampleCalendar />);