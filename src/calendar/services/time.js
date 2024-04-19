const dayClass = ['calendar-body-col'];

const calcCurDate = (month, year) => {
  const cDate = new Date();
  const curDate = cDate.setHours(0, 0, 0, 0);
  const curMonth = cDate.getMonth();
  const currYear = cDate.getFullYear()

  const isCurDate = curMonth == month && currYear == year;

  return {
    isCurDate,
    curDate
  }
}

const buildHoliday = (holiday, days) => {
  let fHoliday = [ ...holiday ];
  let funkDays = [ ...days ];

  return funkDays.map(week => {
    return [
      ...week.map(day => {
        const idxHoliday = fHoliday.findIndex(holEl => holEl.id == day.id);
       
        if (idxHoliday !== -1) {
          return {
            ...day,
            className: [
              ...day.className,
              fHoliday[idxHoliday].class ? fHoliday[idxHoliday].class : 'holiday',
            ],
            hint: [
              ...day.hint,
              ...fHoliday[idxHoliday].hint
            ]
          }
        }

        return {
          ...day
        }
      })
    ]
  });
}

const sliceHoliday = ({ holiday, month, pMonth, nMonth }) => {
  return holiday.reduce((cArr, el) => {
    if (el.month == month || el.month == pMonth || el.month == nMonth) {
      return [
        ...cArr,
        {
          ...el,
          class: el.class ? el.class : '',
          hint: el.hint ? el.hint : [],
          id: new Date(el.year, el.month, el.day).setHours(0, 0, 0, 0)
        }
      ];
    } else {
      return cArr;
    }
  }, []);
};

const buildPrevNextDays = ({ year, month, countDate, startDayWeek, prevNext }) => {
  let days = [];
  let stopCount = (prevNext == 'prev') ? (countDate - startDayWeek) : (6 - countDate + startDayWeek);

  let calcCurMonth = (prevNext == 'prev'
    ? (month - 1) < 0 ? 11 : month - 1
    : (month + 1) > 11 ? 0 : month + 1
  );

  let calcCyrYear = (prevNext == 'prev' 
    ? (month - 1) < 0 ? year - 1 : year
    : (month + 1) > 11 ? +year + 1 : year
  );

  let calcCurD = calcCurDate(calcCurMonth, calcCyrYear);

  stopCount = (prevNext == 'prev'
    ? (stopCount < 0) ? ( 7 - startDayWeek) : stopCount
    : stopCount = (stopCount == 7) ? 0 : stopCount
  );

  for (let i = 0; i < stopCount; i++) {
    let countDay = (prevNext == 'prev'
      ? new Date(year, month, (-i))
      : new Date(year, month + 1, (i + 1))
    );

    countDay.setHours(0, 0, 0, 0);

    let className = (countDay.getDay() == 0 || countDay.getDay() == 6) ? 'output' : '';

    if (countDay.getTime() == calcCurD.curDate) {
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

const fillingDays = ({ days, year, month, startDayWeek, stopDay }) => {
  const countDay = new Date(year, month, 1);
  countDay.setHours(0, 0, 0, 0);

  if (days[0].length < 7) {
    const prevDay = buildPrevNextDays({
      year,
      month,
      startDayWeek,
      prevNext: 'prev',
      countDate: countDay.getDay(),
    });

    days[0] = [
      ...prevDay,
      ...days[0],
    ]
  }

  if (days[days.length - 1].length < 7) {
    countDay.setDate(stopDay)

    const nextDay = buildPrevNextDays({
      year,
      month,
      startDayWeek,
      prevNext: 'next',
      countDate: countDay.getDay(),
    });

    days[days.length - 1] = [
      ...days[days.length - 1],
      ...nextDay
    ]
  }

  return days;
}

const revertArr = (arr) => {
  const newArr = [ [], [], [], [], [], [], [] ];

  arr.forEach((week) => {
    week.forEach((day, cDay) => {
      newArr[cDay].push(day);
    });
  });

  return newArr;
};

export const dayForWeek = ({ year, month, stopDay, startDayWeek, holiday, verticalDay }) => {
  let days = [];
  let calcCurD = calcCurDate(month, year);
  const pMonth = (month - 1) < 0 ? 11 : month - 1;
  const nMonth = (month + 1) > 11 ? 0 : month + 1;

  if (holiday.length) {
    holiday = sliceHoliday({ holiday, month, pMonth, nMonth });
  }

  for (let i = 1; i <= stopDay; i++) {
    let countDay = new Date(year, month, i);
    let className = '';

    countDay.setHours(0, 0, 0, 0);
    className = (countDay.getDay() == 0 || countDay.getDay() == 6) ? 'output' : '';

    if (countDay.getTime() == calcCurD.curDate) {
      className += ' curDate';
    }

    if (countDay.getDay() == startDayWeek) days.push([]);

    const item = {
      id: countDay.getTime(),
      time: countDay.getTime(),
      day: countDay.getDate(),
      className: [ ...dayClass, className ],
      hint: []
    };

    if (!days.length) days.push([]);

    days[days.length - 1].push(item);
  }

  days = fillingDays({ days, year, month, startDayWeek, stopDay });
  days = buildHoliday(holiday, days);

  if (verticalDay) days = revertArr(days);

  return days;
}

export const dayInMonth = (year, numbMonth) => new Date(year, numbMonth + 1, 0).getDate();

export const numberDayInYear = (year, x) => {
  const curTime = new Date(Number(x));
  const lastYear = new Date((year - 1), 11, 31);

  return (curTime.getTime() - lastYear.getTime()) / 86400000;
}

export const getWeeksInMonth = (year, month) => {
 const l = new Date(year, month + 1, 0);

 return Math.ceil((l.getDate()- (l.getDay() ? l.getDay() : 7)) / 7 ) + 1;
}