import React from 'react';

import Button from './Button.jsx';

const ButtonDayPosition = ({
  changeDayWeek,
  changeVertDay,
  vertDay
}) => {
  return (
    <>
      <Button onClick = { changeDayWeek }>
        Изменить начальный день недели
      </Button>
      <Button onClick = { changeVertDay }>
        { vertDay ? 'Горизонтальное' : 'Вертикальное' } отображение календаря
      </Button>
    </>
  )
}

export default ButtonDayPosition;