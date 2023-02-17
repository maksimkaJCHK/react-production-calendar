import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import Calendar from '../index';
import birthdaysArr from './pages/birthdays';
import findIndex from 'core-js/es/array/find-index';

import '../../lib/styles/calendar.css';
import './pages/exampleCalendar.scss';
import './pages/birthdays.scss';

const node = document.getElementById('app');
const root = ReactDOM.createRoot(node);

const BirthayShedule = () => {
  const [ year, setYear ] = useState(2023);
  const [ month, setMonth ] = useState( (new Date()).getMonth() + 1 );

  let [ param, setState ] = useState({
    birthdays: [
      ...birthdaysArr
    ],
    form: {
      time: '',
      isDelete: false,
      date: {
        value: '',
        alarmText: ''
      },
      title: {
        value: '',
        alarmText: ''
      },
      text: {
        value: '',
        alarmText: ''
      }
    }
  });

  const prevMonth = () => {
    setMonth((month < 2) ? month : month - 1);
  }

  const nextMonth = () => {
    setMonth((month > 11) ? month : month + 1);
  }

  const changeInput = (e) => {
    let { birthdays, form } = param;
    let el = e.target;

    setState({
      birthdays: [ ...birthdays ],
      form: {
        ...form,
        [el.name]: {
          value: el.value,
          alarmText: ''
        }
      }
    })
  }

  const returnDateParam = (time) => {
    let date = new Date(time);
    let year = date.getFullYear();
    let month = date.getMonth();
    let day = date.getDate();
    return {
      year,
      month,
      day
    }
  }

  const renderDate = (time) => {
    let ruMonth = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];
    let date = returnDateParam(time);
    return `${date.day} ${ruMonth[date.month]} ${date.year}`;
  }

  const handleMouseOver = (time) => {
    // Событие будет видно только в режиме разработчика, в обычном у меня "console.log" вырезается
    let curDate = renderDate(time);
    console.log(`Вы навели на следующую дату - ${curDate}`);
  }

  const handleMouseOut = (time) => {
    // Событие будет видно только в режиме разработчика, в обычном у меня "console.log" вырезается
    let curDate = renderDate(time);
    console.log(`Вы убрали мышку со следующей даты - ${curDate}`);
  }

  const onChangeDate = (e) => {
    let { birthdays } = param;
    let date = returnDateParam(e);
    let curDate = renderDate(e);
    let title = '';
    let text = '';
    let isDelete = false;
    let selectedDayIndex = birthdays.findIndex(el => el.day == date.day && el.month == date.month && !el.new);
    let newBirthdays = birthdays.reduce((arr, el) => {
      if( !el.new ) {
        return arr = [
          ...arr,
          {
            ...el,
            class: ''
          }
        ]
      }
      return arr = [
        ...arr
      ]
    }, []);

    if(selectedDayIndex != -1) {
      isDelete = true;
      title = birthdays[selectedDayIndex].hint[0].title;
      text = birthdays[selectedDayIndex].hint[0].desc;
      newBirthdays = newBirthdays.map((el, count) => {
        let elClass = (count == selectedDayIndex) ? 'selected holiday' : '';
        return {
          ...el,
          class: elClass
        }
      });
    } else {
      newBirthdays = [
        ...newBirthdays,
        {
          year: date.year,
          month: date.month,
          day: date.day,
          hint: [],
          class: 'selected',
          new: true
        }
      ];
    }

    setState({
      birthdays: [ ...newBirthdays ],
      form: {
        time: e,
        isDelete: isDelete,
        title: {
          value: title,
          alarmText: '',
        },
        text: {
          value: text,
          alarmText: ''
        },
        date: {
          value: curDate,
          alarmText: ''
        }
      }
    });
  }

  const onDelete = (e) => {
    e.preventDefault();
    let { birthdays, form } = param;
    let date = returnDateParam(param.form.time);
    let newBirthdays = birthdays.filter(el => {
      if(el.month == date.month) {
        return el.day != date.day;
      }
      return el.month != date.month;
    });

    setState({
      birthdays: [ ...newBirthdays ],
      form: {
        ...form,
        isDelete: false,
        date: {
          value: '',
          alarmText: ''
        },
        title: {
          value: '',
          alarmText: ''
        },
        text: {
          value: '',
          alarmText: ''
        }
      }
    });
  }

  const onSave = (e) => {
    e.preventDefault();
    let { form, birthdays } = param;
    let dateAlarm = form.date.value ? '' : 'Поле не заполнено';
    let titleAlarm = form.title.value ? '': 'Поле не заполнено';
    let textAlarm = form.text.value ? '': 'Поле не заполнено';

    if(dateAlarm || titleAlarm || textAlarm) {
      setState({
        birthdays: [ ...birthdays ],
        form: {
          time: form.time,
          isDelete: form.isDelete,
          title: {
            value: form.title.value,
            alarmText: titleAlarm
          },
          text: {
            value: form.text.value,
            alarmText: textAlarm
          },
          date: {
            value: form.date.value,
            alarmText: dateAlarm,
          }
        }
      });
    } else {
      let date = returnDateParam(form.time);
      let newBirthdays = birthdays.filter(el => !(el.day == date.day && el.month == date.month) );

      setState({
        birthdays: [
          ...newBirthdays,
          {
            ...date,
            class: 'holiday',
            hint: [
              {
                title: form.title.value,
                desc: form.text.value
              }
            ]
          }
        ],
        form: {
          ...form,
          isDelete: true
        }
      });
    }
  }

  return (
    <div className = 'exampleCalendar'>
      <h2>Выбрать дату</h2>
      <form onSubmit = { onSave }>
        <div className = { param.form.date.alarmText ? 'row alarm' : 'row'}>
          <div className = "dateCheck">
            <div className = "prevM" onClick = { prevMonth }>&#9668;</div>
            <div className = "nextM" onClick = { nextMonth }>&#9658;</div>
            <Calendar
              visibleYear = { false }
              year = { year }
              month = { month }
              holiday = { param.birthdays }
              handleClick = { onChangeDate }
              handleMouseOver = { handleMouseOver }
              handleMouseOut = { handleMouseOut }
            />
          </div>
          <div className = "chosenDate">
            { param.form.date.value ? "Дата: " + param.form.date.value : 'Дата не выбрана' }
          </div>
        </div>
        <div className = { param.form.title.alarmText ? 'row alarm' : 'row'}>
          <label>Заголовок сообщения</label>
          <input
           type = "text"
           name = "title"
           value = { param.form.title.value }
           onChange = { changeInput }
          />
          { param.form.title.alarmText ? <div className = 'hint'>{ param.form.title.alarmText }</div> : null }
        </div>
        <div className = { param.form.text.alarmText ? 'row alarm' : 'row'}>
          <label>Текст сообщения</label>
          <textarea
            type = "text"
            name = "text"
            value = { param.form.text.value }
            onChange = { changeInput }
          />
          { param.form.text.alarmText ? <div className = 'hint'>{ param.form.text.alarmText }</div> : null }
        </div>
        <div className = 'row space-between-align'>
          <button className = "mdc-button" >Сохранить</button>
          {
            param.form.isDelete ? <button className = "mdc-button" onClick = { onDelete }>Удалить событие</button> : null
          }
        </div>
      </form>
      <h2>Дни рождения сотрдников на { year } год</h2>
      <div className = 'exampleCalendar-group'>
        {
          [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((el) => (
            <div key = { el } className = 'exampleCalendar-item'>
              <Calendar
                visibleYear = { false }
                year = { year }
                month = { el }
                holiday = { param.birthdays }
              />
            </div>
          ))
        }
      </div>
    </div>
  )
}

root.render(<BirthayShedule />);