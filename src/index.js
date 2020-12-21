import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Calendar from './calendar/calendar';
import holiday from './holiday';

import './exampleCalendar.scss';

const node = document.getElementById('app');

const ExampleCalendar = () => {

  let [ dayWeek, setDayWeek ] = useState(1);
  let [ month, setMonth ] = useState(1);

  const changeDatWeek = () => {
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
      <button className = 'mdc-button' onClick = { changeDatWeek }>Изменить начальный день недели</button>
      <button className = 'mdc-button' onClick = { decMonth }>Увеличить месяц</button>
      <div className = 'exampleCalendar-wrap'>
        <Calendar lang = 'ru' year = '2020' month = { month } visibleYear = { true } startDayWeek = { dayWeek } holiday = { holiday } />
      </div>
    </div>
  )
}

ReactDOM.render(
  <div>
    <ExampleCalendar />
    <div className = 'exampleCalendar-group'>
      <h2>Календарь на 2020 год</h2>
      <div className = 'exampleCalendar-item'>
        <Calendar visibleYear = { false } year = '2020' month = '1' holiday = { holiday } />
      </div>
      <div className = 'exampleCalendar-item'>
        <Calendar visibleYear = { false } year = '2020' month = '2' holiday = { holiday } />
      </div>
      <div className = 'exampleCalendar-item'>
        <Calendar visibleYear = { false } year = '2020' month = '3' holiday = { holiday } />
      </div>
      <div className = 'exampleCalendar-item'>
        <Calendar visibleYear = { false } year = '2020' month = '4' holiday = { holiday } />
      </div>
      <div className = 'exampleCalendar-item'>
        <Calendar visibleYear = { false } year = '2020' month = '5' holiday = { holiday } />
      </div>
      <div className = 'exampleCalendar-item'>
        <Calendar visibleYear = { false } year = '2020' month = '6' holiday = { holiday } />
      </div>
      <div className = 'exampleCalendar-item'>
        <Calendar visibleYear = { false } year = '2020' month = '7' holiday = { holiday } />
      </div>
      <div className = 'exampleCalendar-item'>
        <Calendar visibleYear = { false } year = '2020' month = '8' holiday = { holiday } />
      </div>
      <div className = 'exampleCalendar-item'>
        <Calendar visibleYear = { false } year = '2020' month = '9' holiday = { holiday } />
      </div>
      <div className = 'exampleCalendar-item'>
        <Calendar visibleYear = { false } year = '2020' month = '10' holiday = { holiday } />
      </div>
      <div className = 'exampleCalendar-item'>
        <Calendar visibleYear = { false } year = '2020' month = '11' holiday = { holiday } />
      </div>
      <div className = 'exampleCalendar-item'>
        <Calendar visibleYear = { false } year = '2020' month = '12' holiday = { holiday } />
      </div>
    </div>
  </div>,
  node
)