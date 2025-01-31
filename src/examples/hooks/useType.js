import React, { useState } from 'react';

const useType = (propMonth = 1) => {
  const [ year ] = useState(2025);
  const [ dayWeek, setDayWeek ] = useState(1);
  const [ month, setMonth ] = useState(propMonth);
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

  return {
    year,
    dayWeek,
    month,
    vertDay,
    // Изменение параметров
    changeDayWeek,
    changeVertDay,
    imcMonth,
    decMonth,
  }
}

export default useType;