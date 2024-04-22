import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';

import useType from './hooks/useType';

import Calendar from '../index';
import holiday from '../holidays/holiday';

import ButtonBlock from './components/ButtonBlock.jsx';

import '../../lib/styles/calendar.css';
import './pages/exampleCalendar.scss';
import './pages/calendarChangeClass.scss'

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
  } = useType((new Date()).getMonth() + 1);

  const [ calClass, setCalClass] = useState('');

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
          calClass = { calClass }
          handleMouseOver = { onMouseOver }
          handleMouseOut = { onMouseOut }
          verticalDay = { vertDay }
        />
      </div>
    </div>
  )
}

root.render(<ExampleCalendar />);