# React production calendar

English | [Русский](./README.ru.md) 

I wrote this widget quite a long time ago, back in class. Now I have rewritten it into hooks. At the moment there are no special features in it, there are already a lot of calendars, maybe someone will find it useful. When he wrote, there was not much choice, and in general, not a single ready-made calendar was suitable for my task.

It's just a calendar, no frills. I really like bright colors, so I made it bright. I took the colors for it from the Material Design library. The second point is that in all the applications in which I used it, it was stylized quite strongly. I prefer “SASS” as a preprocessor, and I put all frequently changed parameters into variables; if you use bright colors in variables, it becomes easier to understand what needs to be changed. You can transfer holidays into it, and if a day falls on it, then when you hover over that day, a tooltip appears with the name of that holiday. Initially, it was conceived as a production calendar (in fact, that’s what it was), then it was part of an application for compiling vacations for employees. One company had 3 modes, the calendar showed Catholic and Orthodox holidays, employee birthdays. I use “RobotoDraft” as fonts, so you will need to connect it, or change the font of my calendar yourself, as I will describe how to do this below. Here is a link to this font:

```
<link rel="stylesheet" href='https://fonts.googleapis.com/css?family=RobotoDraft:400,500|Material+Icons'\>
```

## Installation

In order to try this widget, there are 2 ways:

- Type "npm install react-production-calendar" in the console;
- Download the project from [this repository](https://github.com/maksimkaJCHK/react-production-calendar).

If you installed the widget via "npm", then you can connect it in the following way:

```
import Calendar from 'react-production-calendar'
```

If you downloaded the project from github, then you can connect it in one of the following ways:

- From folder "src/calendar";
- From folder "lib"

And of course, the calendar is displayed in the following way:

```
<Calendar />
```

I will describe the necessary parameters below.

By default the widget will look like [like this](http://sass-lessons.ru/calendar/calendar-without-style.html). It is clear that this is somehow not good. To make it look better you should include CSS, so you must have “style-loader” and “css-loader” installed. 

You can include the following CSS:

```
import 'react-production-calendar/lib/styles/calendar-reset-styles.css';
```

Then the calendar will look like [like this](http://sass-lessons.ru/calendar/calendar-reset.html). Here are the most minimal styles, no padding. You will have to do all the styling yourself. I admit that this can be convenient if you have a calendar design, then you won’t need to mix up a lot of styles. But in general, I moved all frequently changed parameters into variables, and the calendar should be easy to configure.

```
import 'react-production-calendar/lib/styles/calendar-type.css';
```

Then the calendar will look like [like this](http://sass-lessons.ru/calendar/calendar-type.html). Here the calendar more or less looks decent, but it will still need to be stylized.

```
import 'react-production-calendar/lib/styles/calendar-dark.css';
```

Then the calendar will look like [like this](http://sass-lessons.ru/calendar/calendar-dark.html). A dark calendar theme is used here.

```
import 'react-production-calendar/lib/styles/calendar.css';
```

Then the calendar will look [like this](http://sass-lessons.ru/calendar/index.html). Here the calendar is stylized in the "Material Design" style. I recommend using this example as a basis. I put all the frequently changed things into variables; the “Material Design” theme is bright enough to understand what can be changed.

## Options

- lang - is the language of my calendar. Default is Russian. The following languages ​​are available - 'ru' | 'en' | 'de' | 'fr' | 'su'. [Implementation example](http://sass-lessons.ru/calendar/calendar-localization.html).
- year - the year of my calendar. The default is 2025. In fact, what year you want to display, enter that one.
- month - month of my calendar. The default is 1. It’s worth mentioning here that the month starts with 1. 1 is January, 12 is December. When I first started writing this widget, it was made for a specific project, and there was such a numbering of months; in JS, months start from 0.
- visibleYear - parameter indicating whether to indicate the year in the calendar header. Initially, the calendar was a production calendar, and in a production calendar, the year is usually written separately. Available options true | false.
- startDayWeek - determines what day of the week the calendar will start from, default is 1, i.e. starting day is Monday. 0 - starting day is Sunday. Available values ​​0 | 1.
- verticalDay - determines the position of the days of the week. By default "false", the position of the days of the week is horizontal. There are calendars where the position of the days is vertical, as a rule these are Christian calendars.
- holiday - an array of objects pointing to a specific holiday. First, let's look at the holidays in [2025](https://github.com/maksimkaJCHK/react-production-calendar/blob/main/src/holidays/holiday.js). Required parameters are year, month, day. Please note that month must start from 0. 0 is January, 11 is December. When I just started making the project, there were already months, they started from 1. We needed to display holidays, we already did them as normal, let me remind you that in JS months start from 0. The optional parameters are class and hint. There are often dates that are not holidays, and at the same time this date needs to be highlighted somehow; if you write something in a class, then it will be a class for this date. For example, in 2025, April 27, Saturday, is a working day. For this date, I wrote “workDay” in the class. And then I defined the styles, and this date is not displayed as a day off. I also stylized Orthodox and Catholic holidays for one project. If class is empty, then the "holiday" class for the given date will be used. hint is an array of objects, the object contains "title". - tooltip title and "desc" - tooltip text. This is a tooltip that will appear when you hover over it. As I wrote above, the class and hint parameters are optional.
- handleClick - a function that will be triggered when you click on a calendar day. This function takes two parameters, the number of milliseconds that have passed since January 1, 1970. Using this function and certain skills, you can turn your calendar into an organizer. Look at [example](http://sass-lessons.ru/calendar/birthday-schedule.html). And the cell itself, so we can, for example, find out the padding at the top and bottom. See above for an example of changing the calendar class.
- handleMouseOver - a function that will be triggered when you hover the mouse over a calendar day. Accepts the same parameters as handleClick above.
- handleMouseOut - a function that will be triggered when the mouse leaves the calendar day. Accepts the same parameters as handleClick above.
- calClass - class for the calendar. I haven’t encountered such situations, I usually styled the calendar through the parent, but still. Whatever text you write here, this class will be added to the calendar.

## Calendar styling

I recommend including this CSS file (the CSS variables described below are available for this include file):

```
import 'react-production-calendar/lib/styles/calendar.css';
```

I use CSS variables to style the calendar. If anyone doesn't know what this is, I recommend checking out [this article](https://devdoc.net/web/developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_variables.html) . To avoid conflicts, I start all my calendar variables with "--pc". Just change the necessary variables for the block in which the calendar is located. By default I use the following values ​​for the variables.

```
:root {
  // Calendar text color, border color, background color
  --pc-text-color: #000; // Text color for the calendar, default is black.
  --pc-border: 1px solid #424242; // Color of the calendar frame (not cells, but the calendar).
  --pc-cell-border: var(--pc-border); // The color of the frame for calendar cells, where the dates are. Defaults to the calendar ramie color.
  --pc-day-border: var(--pc-border); // The color of the frame for the cells of the calendar days, where the days are (Mon, Tue, Wed, etc.). Defaults to the calendar ramie color.
  --pc-font: 16px/120% 'RobotoDraft'; // Font for the calendar
  --pc-bg: inherit; // Background of the calendar background, if you do not set "--pc-head-bg", "--pc-head-day-bg", "--pc-holiday-bg", then this background will be visible, otherwise these backgrounds will overlap it.

  // Background of the calendar title, its indents, font parameters
  --pc-head-bg: #e6ee9c; // The background is where the year and month of the calendar are displayed
  --pc-head-padding: 22px 0; // Indentation where the year and month of the calendar are displayed
  --pc-head-font: inherit; // The font where the year and month of the calendar are displayed is inherited by default, but it can be replaced if you need the year and month to have a different font, for example a bold one or a larger font than normal.

  // Background of the days of the week, padding
  --pc-head-day-bg: #dce775; // Background of the days of the week
  --pc-head-day-padding: 30% 0; // Indentation of days of the week
  --pc-head-day-font: inherit; // Font for the days of the week, by default it is inherited, but it can be replaced

  // Normal day, weekend and holiday backgrounds, padding, font size, day size (will be visible on the current date)
  --pc-day-bg: #aed581; // Background for a regular date
  --pc-output-bf: #ff5252; // Background for the weekend
  --pc-holiday-bg: #ff1744; // Background for a holiday, by default it will override the weekend background if the holiday falls on Saturday or Sunday.
  --pc-cell-padding: 20% 0; // Indentation for a regular date (for holidays and weekends the indentation will be the same)
  --pc-day-width: 34px; // It will be visible if you open the current date, this is a circle in the date, its length
  --pc-day-height: 34px; // It will be visible if you open the current date, this is a circle in the date, its height
  --pc-day-font: inherit; // Font for the date, by default it is inherited

  // If suddenly the government moves the day off from Saturday or Sunday to a weekday, and this day becomes a working day, then this variable sets the color, I will make it a little brighter than a regular weekday, so that it is noticeable that we are working.
  --pc-workday-bg: #7cb342;

  // Current date settings
  --pc-curr-day-cell-bg: #ffd740; // Background of the current date
  --pc-curr-day-bg: #ffc400; // Background of the date selected inside

  // Tooltip, all the styles associated with it
  --pc-hint-width: 280px; // Tooltip length
  --pc-hint-padding: 15px; // Tooltip padding
  --pc-hint-border-radius: 10px; // border-radius for tooltip
  --pc-hint-box-shadow: 0 0 10px rgba(0, 0, 0, .5); // Tooltip shadow
  --pc-hint-bg: #dce775; // Tooltip background
  --pc-hint-title-color: inherit; // Text color for tooltip title
  --pc-hint-title-font: 16px/120% 'RobotoDraft'; // Tooltip title font
  --pc-hint-title-margin: 0 0 5px; // Tooltip header padding
  --pc-hint-desc-font: 14px/140% 'RobotoDraft'; // Font to describe the tooltip
  --pc-hint-desc-color: inherit; // Text color for tooltip description

  // Inactive days before and after the selected month
  --pc-no-active-day-bg: var(--pc-day-bg); // Background for inactive dates before and after the selected month, if these dates are weekends or holidays, then there will be a background for weekends or holidays
  --pc-no-active-day-opacity: .4; // By default, if the date is not active (it is before or after the selected month), then I change its transparency, by default it is 0.4.
}
```

## Implementation examples

If you want to see what you can do with this calendar, here are the links:

- [Production calendar for 2025](http://sass-lessons.ru/calendar/production-calendar.html);
- [Calendar stylized for different seasons](http://sass-lessons.ru/calendar/seasons.html). On one project, I distinguished different seasons in different ways. In this example, I styled the seasons under "Material Design". Here [here](https://github.com/maksimkaJCHK/react-production-calendar/blob/main/src/examples/seasons.js) you can see the code in JS, here is the code in ["SASS"](https ://github.com/maksimkaJCHK/react-production-calendar/blob/main/src/examples/pages/seasons.scss);
- [Part of the CRM](http://sass-lessons.ru/calendar/birthday-schedule.html), in general, here the HR manager can choose the employee’s birthday. I deleted all Ajax requests from here; I don’t have a database. In a real project, you could select a photo of an employee, a department, and fill out his preferences. When the user visited this page, the birthdays of employees for this week were displayed. It is clear that this is an educational example, I need to show an example of a calendar, so I removed all this from here, but the idea should be clear. Click on the dates, fill in the fields, save, delete them. All similarities with real employees are coincidental)))) The JS code is [here](https://github.com/maksimkaJCHK/react-production-calendar/blob/main/src/examples/birthday_schedule.js), the SASS code is [here](https://github.com/maksimkaJCHK/react-production-calendar/blob/main/src/examples/pages/birthdays.scss).
- [An example of how you can change the calendar class](http://sass-lessons.ru/calendar/calendar-change-class.html). Look, the tooltip when you point to a holiday is displayed by default under the table cell. In this example, I calculate whether the tooltip is included, and depending on this I change the class, so it will be displayed above the cell. Here [here](https://github.com/maksimkaJCHK/react-production-calendar/blob/main/src/examples/calendar_change_class.js) you can see the code in JS, here is the code in ["SASS"](https://github.com/maksimkaJCHK/react-production-calendar/blob/main/src/examples/pages/calendarChangeClass.scss);

If you want to see the examples in more detail, then you should download [this repository](https://github.com/maksimkaJCHK/react-production-calendar). And type the command “npm install” in the console; naturally, you must have node.js installed. After installation, the following commands will be available:

```
npm run dev
```

Run in developer mode, the local server will be available.

```
npm run build
```

The scripts will be compiled and the local server will not be started.

```
npm run buildextract
```

The scripts will be compiled, and CSS and HTML templates will be generated. The local server will not start. The final JS files will be smaller, since the CSS styles will be removed from them, but accordingly they will need to be included in the HTML files yourself.

The examples are located in the "src/examples/" folder.