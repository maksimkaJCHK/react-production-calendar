import React from 'react';

interface IHintArr {
  title?: String,
  desc?: String
}

interface IHolidayArr {
  year?: Number,
  month?: Number,
  day?: Number,
  class?: String,
  hint?: IHintArr[]
}

export interface CalendarProps {
  lang?: 'ru' | 'en' | 'de' | 'fr' | 'su'; 
  month?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | '11' | '12';
  year?: Number | String;
  visibleYear?: Boolean;
  startDayWeek?: 0 | 1 | '0' | '1';
  holiday?: IHolidayArr[];
  calClass?: String;
  handleMouseOut?: Function;
  handleMouseOver?: Function;
  handleClick?: Function;
}

declare const Calendar: React.SFC<CalendarProps>;

export default Calendar;