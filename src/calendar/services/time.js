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
  let funkHoliday = [...holiday];
  let funkDays = [...days];

  funkDays = funkDays.map(week => {
    return [
      ...week.map(day => {
        let findHoliday = funkHoliday.filter(holEl => holEl.id == day.id);

        if(findHoliday.length) {
          return {
            ...day,
            className: [
              ...day.className,
              findHoliday[0].class,
              'holiday'
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
  holiday = holiday.filter(el => {
    return el.month == month || el.month == pMonth || el.month == nMonth
  });
  holiday = holiday.map(el => {
    return {
      ...el,
      id: new Date(el.year, el.month, el.day).setHours(0, 0, 0, 0)
    }
  });

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
      let prevDay = buildPrevDay(year, month, countDay.getDay(), start);
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
        day: countDay.getDate(),
        className: [...dayClass, className ],
        hint: []
      }
    ]

    if(i == stopDay && countDay.getDay() <= 6) {

      let nextDay = buildNextDay(year, month, countDay.getDay(), start);
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

export const buildPrevDay = (year, month, firstDay, start) => {
  let prevDays = [];
  let stopCount = firstDay - start;

  let calcCurMonth = (month - 1) < 0 ? 11 : month - 1;
  let calcCyrYear = (month - 1) < 0 ? year - 1 : year;
  let calcCurD = calcCurDate(calcCurMonth, calcCyrYear);

  stopCount = (stopCount < 0) ? ( 7 - start) : stopCount;
  
  for(let i = 0; i < stopCount; i++) {
    let countDay = new Date(year, month, (-i));
    let className = (countDay.getDay() == 0 || countDay.getDay() == 6) ? 'output' : '';
    countDay.setHours(0, 0, 0, 0);
    if(countDay.getTime() == calcCurD.curDate) {
      className += ' curDate';
    }
    prevDays.unshift({
      id: countDay.getTime(),
      day: countDay.getDate(),
      className: [...dayClass, 'prev', className],
      hint: []
    })
  }

  return prevDays;
}

export const buildNextDay = (year, month, countDate, start) => {
  let prevDays = [];
  let stopCount = 6 - countDate + start;
  let calcCurMonth = (month + 1) > 11 ? 0 : month + 1;
  let calcCurYear = (month + 1) > 11 ? +year + 1 : year;
  let calcCurD = calcCurDate(calcCurMonth, calcCurYear);
  stopCount = (stopCount == 7) ? 0 : stopCount

  for(let i = 0; i < stopCount; i++) {
    let countDay = new Date(year, month + 1, (i + 1));
    let className = '';
    countDay.setHours(0, 0, 0, 0);
    className = (countDay.getDay() == 0 || countDay.getDay() == 6) ? 'output' : '';
    if(calcCurD.isCurDate && countDay.getTime() == calcCurD.curDate) {
      className += ' curDate';
    }
    prevDays.push({
      id: countDay.getTime(),
      day: countDay.getDate(),
      className: [...dayClass, 'next', className],
      hint: []
    })
  }

  return prevDays;
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