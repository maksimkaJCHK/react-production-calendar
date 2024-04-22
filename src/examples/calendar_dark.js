import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';

import useType from './hooks/useType';

import Calendar from '../index';
import holiday from '../holidays/holiday';

import ButtonBlock from './components/ButtonBlock.jsx';

import '../../lib/styles/calendar-dark.css';
import './pages/exampleCalendar.scss';

const node = document.getElementById('app');
const root = ReactDOM.createRoot(node);

const ExampleCalendar = () => {
  const {
    dayWeek,
    month,
    vertDay,
    // Изменение параметров
    changeDayWeek,
    changeVertDay,
    imcMonth,
    decMonth,
  } = useType();

  return (
    <div className = 'exampleCalendar'>
      <ButtonBlock
        imcMonth = { imcMonth }
        changeDayWeek = { changeDayWeek }
        changeVertDay = { changeVertDay }
        decMonth = { decMonth }
        vertDay = { vertDay }
      />

      <div className = 'exampleCalendar-wrap'>
        <Calendar
          lang = 'ru'
          year = {2024}
          month = { month }
          visibleYear = { true }
          startDayWeek = { dayWeek }
          holiday = { holiday }
          verticalDay = { vertDay }
        />
      </div>
    </div>
  )
}

root.render(<ExampleCalendar />);