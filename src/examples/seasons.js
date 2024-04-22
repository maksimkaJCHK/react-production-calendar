import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';

import useType from './hooks/useType';

import Calendar from '../index';
import holiday from '../holidays/holiday';

import ButtonDayPosition from './components/ButtonDayPosition.jsx';

import '../../lib/styles/calendar.css';
import './pages/exampleCalendar.scss';
import './pages/seasons.scss';

const node = document.getElementById('app');
const root = ReactDOM.createRoot(node);

const SeasonsCalendar = () => {
  const {
    year,
    dayWeek,
    vertDay,
    changeDayWeek,
    changeVertDay,
  } = useType();

  return (
    <div className = 'exampleCalendar'>
      <h2>Календарь на { year } год</h2>

      <div className="exampleCalendar-btn-block">
        <ButtonDayPosition
          changeDayWeek = { changeDayWeek }
          changeVertDay = { changeVertDay }
          vertDay = { vertDay }
        />
      </div>

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
                verticalDay = { vertDay }
              />
            </div>
          ))
        }
      </div>
    </div>
  )
}

root.render(<SeasonsCalendar />);