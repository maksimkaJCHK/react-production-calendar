import React from 'react';

import ButtonDayPosition from './ButtonDayPosition.jsx';
import Button from './Button.jsx';

const ButtonBlock = ({
  imcMonth,
  changeDayWeek,
  changeVertDay,
  decMonth,
  vertDay
}) => {
  return (
    <div className="exampleCalendar-btn-block">
      <Button onClick = { imcMonth }>
        Уменьшить месяц
      </Button>

      <ButtonDayPosition
        changeDayWeek = { changeDayWeek }
        changeVertDay = { changeVertDay }
        vertDay = { vertDay }
      />

      <Button onClick = { decMonth }>
        Увеличить месяц
      </Button>
    </div>
  )
}

export default ButtonBlock;