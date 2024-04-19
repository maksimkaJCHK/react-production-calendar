import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import Calendar from '../calendar/index';
import holiday from '../holidays/holiday';

//import '../../lib/styles/calendar.css';
import '../calendar/styles/calendar.scss';
import './pages/exampleCalendar.scss';

const node = document.getElementById('app');
const root = ReactDOM.createRoot(node);

const ExampleCalendar = () => {

  const [ dayWeek, setDayWeek ] = useState(1);
  const [ month, setMonth ] = useState(1);
  const [ vertDay, setVertDay ] = useState(false);

  const changeDayWeek = () => {
    setDayWeek(prevVal => {
      return prevVal == 1 ? 0 : 1;
    });
  }

  const changeVertDay = () => {
    setVertDay(prevVal => {
      return prevVal = !prevVal;
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
      <button className = 'mdc-button' onClick = { changeVertDay }>
        { vertDay ? 'Горизонтальное' : 'Вертикальное' } отображение календаря
      </button>
      <button className = 'mdc-button' onClick = { decMonth }>Увеличить месяц</button>

      <div className = 'exampleCalendar-wrap'>
        <Calendar
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