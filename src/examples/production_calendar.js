import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import Calendar from '../index';
import holiday from '../holidays/holiday';

import '../../lib/styles/calendar.css';
import './pages/exampleCalendar.scss';

const node = document.getElementById('app');
const root = ReactDOM.createRoot(node);

const ProductionCalendar = () => {
  const [ year, setYear ] = useState(2023);
  const [ dayWeek, setDayWeek ] = useState(1);

  const changeDayWeek = () => {
    setDayWeek(prevVal => {
      return prevVal == 1 ? 0 : 1
    });
  }

  return (
    <div className = 'exampleCalendar'>
      <h2>Календарь на { year } год</h2>
      <button className = 'mdc-button' onClick = { changeDayWeek }>Изменить начальный день недели</button>
      <div className = 'exampleCalendar-group'>
        {
          [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((el) => (
            <div key = { el } className = 'exampleCalendar-item'>
              <Calendar
                visibleYear = { false }
                year = { year }
                month = { el }
                holiday = { holiday }
                startDayWeek = { dayWeek }
              />
            </div>
          ))
        }
      </div>
    </div>
  )
}

root.render(<ProductionCalendar />);