import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';

import useType from './hooks/useType';

import Calendar from '../index';
import holiday from '../holidays/holiday';

import ButtonDayPosition from './components/ButtonDayPosition.jsx';

import '../../lib/styles/calendar.css';
import './pages/exampleCalendar.scss';

const node = document.getElementById('app');
const root = ReactDOM.createRoot(node);

const ProductionCalendar = () => {
  const {
    year,
    dayWeek,
    vertDay,
    // Изменение параметров
    changeDayWeek,
    changeVertDay,
  } = useType();

  const [ lang, setLang ] = useState('ru');

  const changeLang = (e) => {
    let langI = e.target.value;
    if(langI != lang) {
      setLang(langI);
    }
  }

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

      <div className = 'exampleCalendar-lang'>
        <input
          type = 'radio'
          name = 'lang'
          value = 'ru'
          onChange = { changeLang }
          id = 'lang-1'
          checked = { lang == 'ru' }
        />
        <label htmlFor = 'lang-1'>Russian</label>
      </div>
      <div className = 'exampleCalendar-lang'>
        <input
          type = 'radio'
          name = 'lang'
          value = 'en'
          onChange = { changeLang }
          id = 'lang-2'
          checked = { lang  == 'en'}
        />
        <label htmlFor = 'lang-2'>English</label>
      </div>
      <div className = 'exampleCalendar-lang'>
        <input
          type = 'radio'
          name = 'lang'
          value = 'de'
          onChange = { changeLang }
          id = 'lang-3'
          checked = { lang  == 'de'}
        />
        <label htmlFor = 'lang-3'>Denmark</label>
      </div>
      <div className = 'exampleCalendar-lang'>
        <input
          type = 'radio'
          name = 'lang'
          value = 'fr'
          onChange = { changeLang }
          id = 'lang-4'
          checked = { lang  == 'fr'}
        />
        <label htmlFor = 'lang-4'>France</label>
      </div>
      <div className = 'exampleCalendar-lang'>
        <input
          type = 'radio'
          name = 'lang'
          value = 'su'
          onChange = { changeLang }
          id = 'lang-5'
          checked = { lang  == 'su'}
        />
        <label htmlFor = 'lang-5'>Suomen</label>
      </div>
      <div className = 'exampleCalendar-group'>
        {
          [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((el) => (
            <div key = { el} className = 'exampleCalendar-item'>
              <Calendar
                lang = { lang }
                visibleYear = { false }
                year = {year}
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

root.render(<ProductionCalendar />);