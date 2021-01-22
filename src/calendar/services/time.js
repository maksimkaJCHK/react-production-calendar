const dayClass = ['calendar-body-col'];

const calcCurDate = (month, year) => {
  let curDate = new Date().setHours(0, 0, 0, 0);
  let curMonth = new Date(curDate).getMonth();
  let currYear = new Date(curDate).getFullYear()
  let isCurDate = (curMonth == month && currYear == year) ? true : false;

  return {
    isCurDate,
    curDate
  }
}

const buildHolidayCal = (holiday, days) => {
  let funkHoliday = [ ...holiday ];
  let funkDays = [ ...days ];

  funkDays = funkDays.map(week => {
    return [
      ...week.map(day => {
        let findHoliday = funkHoliday.filter(holEl => holEl.id == day.id);
        if(findHoliday.length) {
          return {
            ...day,
            className: [
              ...day.className,
              findHoliday[0].class ? findHoliday[0].class : 'holiday',
            ],
            hint: [
              ...day.hint,
              ...findHoliday[0].hint
            ]
          }
        }
        return {
          ...day
        }
      })
    ]
  });

  return funkDays;
}

export const dayForWeek = (year, month, stopDay, start, holiday) => {
  let days = [[]];
  let calcCurD = calcCurDate(month, year);
  let pMonth = (month - 1) < 0 ? 11 : month - 1;
  let nMonth = (month + 1) > 11 ? 0 : month + 1;
  if(holiday.length) {
    holiday = holiday.filter(el => {
      return el.month == month || el.month == pMonth || el.month == nMonth
    });
    holiday = holiday.map(el => {
      return {
        ...el,
        class: el.class ? el.class : '',
        hint: el.hint ? el.hint : [],
        id: new Date(el.year, el.month, el.day).setHours(0, 0, 0, 0)
      }
    });
  }
  for(let i = 1; i <= stopDay; i++) {
    let countDay = new Date(year, month, i);
    let className = '';
    countDay.setHours(0, 0, 0, 0);
    className = (countDay.getDay() == 0 || countDay.getDay() == 6) ? 'output' : '';
    if(countDay.getTime() == calcCurD.curDate) {
      className += ' curDate';
    }
    let item = [];
    if(i == 1 && countDay.getDay() != start) {
      let prevDay = buildPrevNextDays(year, month, countDay.getDay(), start, 'prev');
      item = [
        ...prevDay
      ]
    }

    if(i != 0 && countDay.getDay() == start) {
      days.push([]);
    }
    item = [
      ...item,
      {
        id: countDay.getTime(),
        time: countDay.getTime(),
        day: countDay.getDate(),
        className: [ ...dayClass, className ],
        hint: []
      }
    ]

    if(i == stopDay && countDay.getDay() <= 6) {

      let nextDay = buildPrevNextDays(year, month, countDay.getDay(), start, 'next');
      item = [
        ...item,
        ...nextDay
      ]
    }

    days[days.length - 1].push(...item);
  }

  days = buildHolidayCal(holiday, days);
  return days;
}

const buildPrevNextDays = (year, month, countDate, start, prevNext) => {
  let days = [];
  let stopCount = (prevNext == 'prev') ? (countDate - start) : (6 - countDate + start);
  let calcCurMonth = ( prevNext == 'prev'
    ? (month - 1) < 0 ? 11 : month - 1
    : (month + 1) > 11 ? 0 : month + 1
  );
  let calcCyrYear = (prevNext == 'prev' 
    ? (month - 1) < 0 ? year - 1 : year
    : (month + 1) > 11 ? +year + 1 : year
  );
  let calcCurD = calcCurDate(calcCurMonth, calcCyrYear);
  stopCount = (prevNext == 'prev'
    ? (stopCount < 0) ? ( 7 - start) : stopCount
    : stopCount = (stopCount == 7) ? 0 : stopCount
  );

  for(let i = 0; i < stopCount; i++) {
    let countDay = (prevNext == 'prev'
      ? new Date(year, month, (-i))
      : new Date(year, month + 1, (i + 1))
    );
    countDay.setHours(0, 0, 0, 0);
    let className = (countDay.getDay() == 0 || countDay.getDay() == 6) ? 'output' : '';
    
    if(countDay.getTime() == calcCurD.curDate) {
      className += ' curDate';
    }

    let dayParam = {
      id: countDay.getTime(),
      time: countDay.getTime(),
      day: countDay.getDate(),
      className: [...dayClass, (prevNext == 'prev') ? 'prev' : 'next', className],
      hint: []
    }

    if(prevNext == 'prev') {
      days.unshift({ ...dayParam })
    } else {
      days.push({ ...dayParam });
    }
  }
  return days;
}

export const dayInMonth = (year, numbMonth) => {
  let date = new Date(year, numbMonth + 1, 0);
  return date.getDate();
}

export const numberDayInYear = (year, x) => {
  let curTime = new Date(Number(x));
  let lastYear = new Date((year - 1), 11, 31);
  return (curTime.getTime() - lastYear.getTime()) / 86400000;
}

export const getWeeksInMonth = (year, month) => {
 let l = new Date(year, month + 1, 0);
 return Math.ceil((l.getDate()- (l.getDay() ? l.getDay() : 7)) / 7 ) + 1;
}