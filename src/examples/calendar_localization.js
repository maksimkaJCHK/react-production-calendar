import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Calendar from '../index';
import holiday from '../holidays/holiday';

import '../../lib/styles/calendar.css';
import './pages/exampleCalendar.scss';

const node = document.getElementById('app');

const ProductionCalendar = () => {

  let [ dayWeek, setDayWeek ] = useState(1);
  let [ lang, setLang ] = useState('ru');

  const changeLang = (e) => {
    let langI = e.target.value;
    if(langI != lang) {
      setLang(langI);
    }
  }

  const changeDayWeek = () => {
    setDayWeek(prevVal => {
      return prevVal == 1 ? 0 : 1
    });
  }

  return (
    <div className = 'exampleCalendar'>
      <h2>Календарь на 2022 год</h2>
      <button className = 'mdc-button' onClick = { changeDayWeek }>Изменить начальный день недели</button>
      <div className = 'exampleCalendar-lang'>
        <input type = 'radio' name = 'lang' value = 'ru' onChange = { changeLang } id = 'lang-1' checked = { lang  == 'ru'} />
        <label htmlFor = 'lang-1'>Russian</label>
      </div>
      <div className = 'exampleCalendar-lang'>
        <input type = 'radio' name = 'lang' value = 'en' onChange = { changeLang } id = 'lang-2' checked = { lang  == 'en'} />
        <label htmlFor = 'lang-2'>English</label>
      </div>
      <div className = 'exampleCalendar-lang'>
        <input type = 'radio' name = 'lang' value = 'de' onChange = { changeLang } id = 'lang-3' checked = { lang  == 'de'} />
        <label htmlFor = 'lang-3'>Denmark</label>
      </div>
      <div className = 'exampleCalendar-lang'>
        <input type = 'radio' name = 'lang' value = 'fr' onChange = { changeLang } id = 'lang-4' checked = { lang  == 'fr'} />
        <label htmlFor = 'lang-4'>France</label>
      </div>
      <div className = 'exampleCalendar-lang'>
        <input type = 'radio' name = 'lang' value = 'su' onChange = { changeLang } id = 'lang-5' checked = { lang  == 'su'} />
        <label htmlFor = 'lang-5'>Suomen</label>
      </div>
      <div className = 'exampleCalendar-group'>
        <div className = 'exampleCalendar-item'>
          <Calendar lang = { lang } visibleYear = { false } year = '2022' month = '1' holiday = { holiday } startDayWeek = { dayWeek } startDayWeek = { dayWeek } />
        </div>
        <div className = 'exampleCalendar-item'>
          <Calendar lang = { lang } visibleYear = { false } year = '2022' month = '2' holiday = { holiday } startDayWeek = { dayWeek } />
        </div>
        <div className = 'exampleCalendar-item'>
          <Calendar lang = { lang } visibleYear = { false } year = '2022' month = '3' holiday = { holiday } startDayWeek = { dayWeek } />
        </div>
        <div className = 'exampleCalendar-item'>
          <Calendar lang = { lang } visibleYear = { false } year = '2022' month = '4' holiday = { holiday } startDayWeek = { dayWeek } />
        </div>
        <div className = 'exampleCalendar-item'>
          <Calendar lang = { lang } visibleYear = { false } year = '2022' month = '5' holiday = { holiday } startDayWeek = { dayWeek } />
        </div>
        <div className = 'exampleCalendar-item'>
          <Calendar lang = { lang } visibleYear = { false } year = '2022' month = '6' holiday = { holiday } startDayWeek = { dayWeek } />
        </div>
        <div className = 'exampleCalendar-item'>
          <Calendar lang = { lang } visibleYear = { false } year = '2022' month = '7' holiday = { holiday } startDayWeek = { dayWeek } />
        </div>
        <div className = 'exampleCalendar-item'>
          <Calendar lang = { lang } visibleYear = { false } year = '2022' month = '8' holiday = { holiday } startDayWeek = { dayWeek } />
        </div>
        <div className = 'exampleCalendar-item'>
          <Calendar lang = { lang } visibleYear = { false } year = '2022' month = '9' holiday = { holiday } startDayWeek = { dayWeek } />
        </div>
        <div className = 'exampleCalendar-item'>
          <Calendar lang = { lang } visibleYear = { false } year = '2022' month = '10' holiday = { holiday } startDayWeek = { dayWeek } />
        </div>
        <div className = 'exampleCalendar-item'>
          <Calendar lang = { lang } visibleYear = { false } year = '2022' month = '11' holiday = { holiday } startDayWeek = { dayWeek } />
        </div>
        <div className = 'exampleCalendar-item'>
          <Calendar lang = { lang } visibleYear = { false } year = '2022' month = '12' holiday = { holiday } startDayWeek = { dayWeek } />
        </div>
      </div>
    </div>
  )
}

ReactDOM.render(
  <ProductionCalendar />,
  node
)