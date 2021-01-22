!function(){"use strict";var e={84:function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r,n=(r=a(7294))&&r.__esModule?r:{default:r},o=a(3777);var i=function(e){var t=e.year,a=e.month,r=e.startDayWeek,i=e.holiday,l=e.handleClick,c=e.handleMouseOver,d=e.handleMouseOut,u=(0,o.dayInMonth)(t,a),s=(0,o.dayForWeek)(t,a,u,r,i);return n.default.createElement("div",{className:"calendar-body"},s.map((function(e,t){return n.default.createElement("div",{key:t,className:"calendar-body-row"},e.map((function(e){return n.default.createElement("div",{className:e.className.join(" "),key:e.id,onClick:function(){return l(e.time)},onMouseOver:function(){return c(e.time)},onMouseOut:function(){return d(e.time)}},n.default.createElement("div",{className:"calendar-body-day"},e.day),e.hint.length?e.hint.map((function(e,t){return n.default.createElement("div",{className:"calendar-body-hint",key:t},n.default.createElement("div",{className:"calendar-body-title"},e.title),n.default.createElement("div",{className:"calendar-body-desc"},e.desc))})):null)})))})))};t.default=i},6244:function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r,n=(r=a(7294))&&r.__esModule?r:{default:r},o=a(174);function i(e){return function(e){if(Array.isArray(e))return l(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return l(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(e):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?l(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function l(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,r=new Array(t);a<t;a++)r[a]=e[a];return r}var c=function(e){var t=e.startDayWeek,a=e.lang,r=i(o.days[a]),l=0==t?[].concat(i(r.slice(6)),i(r.slice(0,6))):r;return n.default.createElement("div",{className:"calendar-day"},l.map((function(e,t){return n.default.createElement("div",{className:"calendar-day-col",key:t},e)})))};t.default=c},7999:function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r,n=(r=a(7294))&&r.__esModule?r:{default:r},o=a(3030);function i(e){return function(e){if(Array.isArray(e))return l(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return l(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(e):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?l(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function l(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,r=new Array(t);a<t;a++)r[a]=e[a];return r}var c=function(e){var t=e.lang,a=e.year,r=e.month,l=e.visibleYear,c=i(o.months[t.toLowerCase()]),d=new Date(a,r),u=c[d.getMonth()],s=l?d.getFullYear():"";return n.default.createElement("div",{className:"calendar-head"},u," ",s)};t.default=c},4989:function(e,t,a){t.Z=void 0;var r=c(a(7294)),n=c(a(7999)),o=c(a(6244)),i=c(a(84)),l=a(600);function c(e){return e&&e.__esModule?e:{default:e}}var d=function(e){var t=e.lang,a=void 0===t?"ru":t,c=e.year,d=void 0===c?"2021":c,u=e.month,s=void 0===u?"1":u,m=e.visibleYear,y=void 0===m||m,f=e.startDayWeek,h=void 0===f?1:f,p=e.holiday,b=void 0===p?[]:p,v=e.handleClick,g=void 0===v?function(){return null}:v,x=e.handleMouseOver,D=void 0===x?function(){return null}:x,k=e.handleMouseOut,w=void 0===k?function(){return null}:k,E=s-1,O="calendar ".concat(l.monthClass[E]);return r.default.createElement("div",{className:O},r.default.createElement(n.default,{lang:a,year:d,month:E,visibleYear:y}),r.default.createElement(o.default,{startDayWeek:h,lang:a}),r.default.createElement(i.default,{startDayWeek:h,year:d,month:E,holiday:b,handleClick:g,handleMouseOver:D,handleMouseOut:w}))};t.Z=d},174:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.days=void 0;t.days={ru:["Пн","Вт","Ср","Чт","Пт","Сб","Вс"],en:["Mon","Tue","Wed","Thu","May","Fri","Sat","Sun"],de:["Mon","Die","Mit","Don","Fre","Sum","Son"],fr:["Lun","Mar","Mer","Jeu","Ven","Sem","Dim"],su:["Mn","Ts","Ks","Tr","Pj","Ln","Sn"]}},3030:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.months=void 0;t.months={ru:["Январь","Февраль","Март","Апрель","Май","Июнь","Июль","Август","Сентябрь","Октябрь","Ноябрь","Декабрь"],en:["January","February","March","April","May","June","July","August","September","October","November","December"],de:["Januar","Februar","März","April","Kann","Juni","Juli","August","September","Oktober","November","Dezember"],fr:["Janvier","Février","Mars","Avril","Peut","Juin","Juillet","Août","Septembre","Octobre","Novembre","Décembre"],su:["Tammikuu","Helmikuu","Maaliskuu","Huhtikuu","Saattaa","Kesäkuu","Heinäkuu","Elokuu","Syyskuu","Lokakuu","Marraskuu","Joulukuu"]}},600:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.monthClass=void 0;t.monthClass=["january","february","march","april","may","june","july","august","september","october","november","december"]},3777:function(e,t){function a(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function r(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e){return function(e){if(Array.isArray(e))return i(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return i(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(e):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?i(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,r=new Array(t);a<t;a++)r[a]=e[a];return r}Object.defineProperty(t,"__esModule",{value:!0}),t.getWeeksInMonth=t.numberDayInYear=t.dayInMonth=t.dayForWeek=void 0;var l=["calendar-body-col"],c=function(e,t){var a=(new Date).setHours(0,0,0,0),r=new Date(a).getMonth(),n=new Date(a).getFullYear();return{isCurDate:r==e&&n==t,curDate:a}};t.dayForWeek=function(e,t,a,n,i){var u=[[]],s=c(t,e),m=t-1<0?11:t-1,y=t+1>11?0:t+1;i.length&&(i=(i=i.filter((function(e){return e.month==t||e.month==m||e.month==y}))).map((function(e){return r(r({},e),{},{class:e.class?e.class:"",hint:e.hint?e.hint:[],id:new Date(e.year,e.month,e.day).setHours(0,0,0,0)})})));for(var f=1;f<=a;f++){var h,p=new Date(e,t,f),b="";p.setHours(0,0,0,0),b=0==p.getDay()||6==p.getDay()?"output":"",p.getTime()==s.curDate&&(b+=" curDate");var v=[];if(1==f&&p.getDay()!=n&&(v=o(d(e,t,p.getDay(),n,"prev"))),0!=f&&p.getDay()==n&&u.push([]),v=[].concat(o(v),[{id:p.getTime(),time:p.getTime(),day:p.getDate(),className:[].concat(l,[b]),hint:[]}]),f==a&&p.getDay()<=6){var g=d(e,t,p.getDay(),n,"next");v=[].concat(o(v),o(g))}(h=u[u.length-1]).push.apply(h,o(v))}return function(e,t){var a=o(e);return o(t).map((function(e){return o(e.map((function(e){var t=a.filter((function(t){return t.id==e.id}));return t.length?r(r({},e),{},{className:[].concat(o(e.className),[t[0].class?t[0].class:"holiday"]),hint:[].concat(o(e.hint),o(t[0].hint))}):r({},e)})))}))}(i,u)};var d=function(e,t,a,n,o){var i=[],d="prev"==o?a-n:6-a+n,u=c("prev"==o?t-1<0?11:t-1:t+1>11?0:t+1,"prev"==o?t-1<0?e-1:e:t+1>11?+e+1:e);d="prev"==o?d<0?7-n:d:d=7==d?0:d;for(var s=0;s<d;s++){var m="prev"==o?new Date(e,t,-s):new Date(e,t+1,s+1);m.setHours(0,0,0,0);var y=0==m.getDay()||6==m.getDay()?"output":"";m.getTime()==u.curDate&&(y+=" curDate");var f={id:m.getTime(),time:m.getTime(),day:m.getDate(),className:[].concat(l,["prev"==o?"prev":"next",y]),hint:[]};"prev"==o?i.unshift(r({},f)):i.push(r({},f))}return i};t.dayInMonth=function(e,t){return new Date(e,t+1,0).getDate()};t.numberDayInYear=function(e,t){var a=new Date(Number(t)),r=new Date(e-1,11,31);return(a.getTime()-r.getTime())/864e5};t.getWeeksInMonth=function(e,t){var a=new Date(e,t+1,0);return Math.ceil((a.getDate()-(a.getDay()?a.getDay():7))/7)+1}},2679:function(e,t,a){var r=a(7294),n=a(3935),o=a(4989),i=a(3379),l=a.n(i),c=a(4709),d={insert:"head",singleton:!1},u=(l()(c.Z,d),c.Z.locals,o.Z),s=[{year:2021,month:0,day:1,class:"",hint:[{title:"Новогодние каникулы",desc:"В этом году новогодние каникулы будут долгими и продлятся 10 дней."}]},{year:2021,month:0,day:2,class:"",hint:[{title:"Новогодние каникулы",desc:"В этом году новогодние каникулы будут долгими и продлятся 10 дней."}]},{year:2021,month:0,day:3,class:"",hint:[{title:"Новогодние каникулы",desc:"В этом году новогодние каникулы будут долгими и продлятся 10 дней."}]},{year:2021,month:0,day:4,class:"",hint:[{title:"Новогодние каникулы",desc:"В этом году новогодние каникулы будут долгими и продлятся 10 дней."}]},{year:2021,month:0,day:5,class:"",hint:[{title:"Новогодние каникулы",desc:"В этом году новогодние каникулы будут долгими и продлятся 10 дней."}]},{year:2021,month:0,day:6,class:"",hint:[{title:"Новогодние каникулы",desc:"В этом году новогодние каникулы будут долгими и продлятся 10 дней."}]},{year:2021,month:0,day:7,class:"",hint:[{title:"Рождество Христово",desc:"Один из главных христианских праздников, отмечается всеми христианскими деноминациями."}]},{year:2021,month:0,day:8,class:"",hint:[{title:"Новогодние каникулы",desc:"В этом году новогодние каникулы будут долгими и продлятся 10 дней."}]},{year:2021,month:1,day:20,class:"workDay",hint:[{title:"Рабочий день",desc:"Этот день будет рабочим, зато понедельник будет выходным"}]},{year:2021,month:1,day:22,class:"",hint:[{title:"Выходной день",desc:"В этом году 23 февраля выходит на вторник, и было решено сделать субботу рабочим днем, а выходной перенести на понедельник."}]},{year:2021,month:1,day:23,class:"",hint:[{title:"День защитника отечества",desc:"Тут особо и не попишешь, вобщем женщинам нужно успеть закупиться носками и пеной для бритья."}]},{year:2021,month:2,day:8,class:"",hint:[{title:"8 марта",desc:"Международный женский день. Появился как день солидарности женщин в борьбе за равные права и эмансипацию. С марта 1975 года Международный женский день отмечается в ООН. А если по честному, то кроме СНГ нигде он не отмечается."}]},{year:2021,month:4,day:1,class:"",hint:[{title:"1 мая",desc:"В современной России 1 мая отмечается как Праздник Весны и Труда. Первомай в современном виде возник в середине XIX века в рабочем движении, выдвинувшем в качестве одного из основных требований введение восьмичасового рабочего дня. Первыми с требованием восьмичасового рабочего дня выступили рабочие Австралии 21 апреля 1856 года. С тех пор этот праздник в Австралии стал ежегодным. По образцу рабочих Австралии 1 мая 1886 года анархические организации США и Канады устроили ряд митингов и демонстраций. При разгоне такой демонстрации в Чикаго 4 мая 1886 года погибли шесть демонстрантов. "}]},{year:2021,month:4,day:3,class:"",hint:[{title:"Выходной день",desc:"Так как 1 мая выходит на субботу, выходной переноситчя на понедельник."}]},{year:2021,month:4,day:9,class:"",hint:[{title:"9 мая – День Победы",desc:"Праздник победы Красной Армии и советского народа над нацистской Германией в Великой Отечественной войне 1941—1945 годов. Установлен Указом Президиума Верховного Совета СССР от 8 мая 1945 года и отмечается 9 мая каждого года. В 1945—1947 и с 1965 года День Победы — нерабочий праздничный день."}]},{year:2021,month:4,day:10,class:"",hint:[{title:"Выходной день",desc:"Так как в этом году 9 мая выпадает на воскресенье, то он соответственно переносится на понедельник."}]},{year:2021,month:5,day:12,class:"",hint:[{title:"День России",desc:"День принятия Декларации о государственном суверенитете РСФСР, в просторечии - День независимости. Наверное, это самый противоречивый праздник в современной Российской действительности.)))"}]},{year:2021,month:5,day:14,class:"",hint:[{title:"Выходной день",desc:"Так как в этом году день России выходит на субботу , выходной переносится на понедельник."}]},{year:2021,month:10,day:4,class:"",hint:[{title:"День народного единства",desc:"22 октября (1 ноября) 1612 года народное ополчение под предводительством Кузьмы Минина и Дмитрия Пожарского штурмом взяло Китай-город, гарнизон Речи Посполитой отступил в Кремль. Князь Пожарский вступил в Китай-город с Казанской иконой Божией Матери. 23 октября (2 ноября) командование гарнизона подписало капитуляцию, выпустив тогда же из Кремля московских бояр и других знатных лиц. На следующий день 24 октября (3 ноября) гарнизон сдался. "}]},{year:2021,month:10,day:5,class:"",hint:[{title:"Выходной день",desc:"Видимо с новогодних праздников что-то переносится."}]},{year:2021,month:11,day:31,class:"",hint:[{title:"Выходной день",desc:"Видимо с новогодних праздников что-то переносится."}]}],m=a(9681),y={insert:"head",singleton:!1};l()(m.Z,y),m.Z.locals;function f(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var a=[],r=!0,n=!1,o=void 0;try{for(var i,l=e[Symbol.iterator]();!(r=(i=l.next()).done)&&(a.push(i.value),!t||a.length!==t);r=!0);}catch(e){n=!0,o=e}finally{try{r||null==l.return||l.return()}finally{if(n)throw o}}return a}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return h(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);"Object"===a&&e.constructor&&(a=e.constructor.name);if("Map"===a||"Set"===a)return Array.from(e);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return h(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function h(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,r=new Array(t);a<t;a++)r[a]=e[a];return r}var p=document.getElementById("app"),b=function(){var e,t,a,n=f((0,r.useState)(1),2),o=n[0],i=n[1];return r.createElement("div",{className:"exampleCalendar"},r.createElement("h2",null,"Календарь на 2021 год"),r.createElement("button",{className:"mdc-button",onClick:function(){i((function(e){return 1==e?0:1}))}},"Изменить начальный день недели"),r.createElement("div",{className:"exampleCalendar-group"},r.createElement("div",{className:"exampleCalendar-item"},r.createElement(u,(a=o,(t="startDayWeek")in(e={visibleYear:!1,year:"2021",month:"1",holiday:s,startDayWeek:o})?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e))),r.createElement("div",{className:"exampleCalendar-item"},r.createElement(u,{visibleYear:!1,year:"2021",month:"2",holiday:s,startDayWeek:o})),r.createElement("div",{className:"exampleCalendar-item"},r.createElement(u,{visibleYear:!1,year:"2021",month:"3",holiday:s,startDayWeek:o})),r.createElement("div",{className:"exampleCalendar-item"},r.createElement(u,{visibleYear:!1,year:"2021",month:"4",holiday:s,startDayWeek:o})),r.createElement("div",{className:"exampleCalendar-item"},r.createElement(u,{visibleYear:!1,year:"2021",month:"5",holiday:s,startDayWeek:o})),r.createElement("div",{className:"exampleCalendar-item"},r.createElement(u,{visibleYear:!1,year:"2021",month:"6",holiday:s,startDayWeek:o})),r.createElement("div",{className:"exampleCalendar-item"},r.createElement(u,{visibleYear:!1,year:"2021",month:"7",holiday:s,startDayWeek:o})),r.createElement("div",{className:"exampleCalendar-item"},r.createElement(u,{visibleYear:!1,year:"2021",month:"8",holiday:s,startDayWeek:o})),r.createElement("div",{className:"exampleCalendar-item"},r.createElement(u,{visibleYear:!1,year:"2021",month:"9",holiday:s,startDayWeek:o})),r.createElement("div",{className:"exampleCalendar-item"},r.createElement(u,{visibleYear:!1,year:"2021",month:"10",holiday:s,startDayWeek:o})),r.createElement("div",{className:"exampleCalendar-item"},r.createElement(u,{visibleYear:!1,year:"2021",month:"11",holiday:s,startDayWeek:o})),r.createElement("div",{className:"exampleCalendar-item"},r.createElement(u,{visibleYear:!1,year:"2021",month:"12",holiday:s,startDayWeek:o}))))};n.render(r.createElement(b,null),p)},4709:function(e,t,a){var r=a(3645),n=a.n(r)()((function(e){return e[1]}));n.push([e.id,'.calendar{color:#000;width:100%;text-align:center;border:1px solid #424242;font:16px/120% "RobotoDraft"}.calendar .calendar-day-col,.calendar .calendar-body-col{width:14.28571428571429%}.calendar .curDate{background:#ffd740}.calendar .curDate .calendar-body-day{background-color:#ffc400}.calendar .output{background-color:#ff5252}.calendar .holiday{cursor:pointer;background-color:#ff1744}.calendar-head{padding:20px 0;background:#e6ee9c}.calendar-day{display:flex;width:100%}.calendar-day-col{padding:4% 0;background:#dce775;border:1px solid #424242;border-right:none;border-bottom:none}.calendar-day-col:first-of-type{border-left:none}.calendar-body-day{width:34px;height:34px;line-height:34px;display:inline-block;border-radius:50%}.calendar-body-row{width:100%;display:flex}.calendar-body-col{position:relative;padding:2% 0;border:1px solid #424242;border-right:none;border-bottom:none;background-color:#aed581;transition:background-color .15s ease-in-out 0s}.calendar-body-col:first-of-type{border-left:none}.calendar-body-col:hover{z-index:2}.calendar-body-col:hover .calendar-body-hint{top:100%;left:50%;margin-left:-140px}.calendar-body-hint{top:-3000px;left:-3000px;position:absolute;width:280px;padding:15px;border-radius:10px;background-color:#dce775;box-shadow:0 0 10px rgba(0,0,0,0.5)}.calendar-body-title{font:16px/120% "RobotoDraft";margin:0 0 5px}.calendar-body-desc{font:14px/140% "RobotoDraft"}.calendar .prev div,.calendar .next div{opacity:.4}.calendar .prev:hover .calendar-body-hint,.calendar .next:hover .calendar-body-hint{top:-3000px;left:-3000px}.calendar .workDay{background-color:#7cb342}\n',""]),t.Z=n},9681:function(e,t,a){var r=a(3645),n=a.n(r)()((function(e){return e[1]}));n.push([e.id,".exampleCalendar{text-align:center;font-size:16px;font-family:'RobotoDraft'}.exampleCalendar-wrap{width:100%;max-width:600px;display:block;margin:20px auto}.exampleCalendar-group{display:flex;flex-wrap:wrap;max-width:1400px;margin:40px auto;justify-content:center;font-family:'RobotoDraft'}.exampleCalendar-group h2{width:100%;text-align:center}.exampleCalendar-item{width:30%;max-width:480px;min-width:300px;margin:20px}.exampleCalendar .mdc-button{font-family:'RobotoDraft', sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:.875rem;line-height:2.25rem;font-weight:500;letter-spacing:.0892857143em;text-decoration:none;text-transform:uppercase;padding:5px 18px;display:inline-flex;position:relative;align-items:center;justify-content:center;box-sizing:border-box;min-width:64px;border:none;outline:none;line-height:inherit;-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none;user-select:none;appearance:none;overflow:visible;vertical-align:middle;border-radius:4px;background-color:#fdd835;transition:background-color .15s ease-in-out, box-shadow .15s ease-in-out}.exampleCalendar .mdc-button::-moz-focus-inner{padding:0;border:0}.exampleCalendar .mdc-button:hover{cursor:pointer;background-color:#fbc02d}.exampleCalendar .mdc-button:active{background-color:#f2c80d}.exampleCalendar .mdc-button:disabled{background-color:transparent;color:rgba(0,0,0,0.37);cursor:default;pointer-events:none}.exampleCalendar .mdc-button{height:36px}\n",""]),t.Z=n}},t={};function a(r){if(t[r])return t[r].exports;var n=t[r]={id:r,exports:{}};return e[r](n,n.exports,a),n.exports}a.m=e,a.x=function(){},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,{a:t}),t},a.d=function(e,t){for(var r in t)a.o(t,r)&&!a.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},a.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},function(){var e={783:0},t=[[2679,592]],r=function(){},n=function(n,o){for(var i,l,c=o[0],d=o[1],u=o[2],s=o[3],m=0,y=[];m<c.length;m++)l=c[m],a.o(e,l)&&e[l]&&y.push(e[l][0]),e[l]=0;for(i in d)a.o(d,i)&&(a.m[i]=d[i]);for(u&&u(a),n&&n(o);y.length;)y.shift()();return s&&t.push.apply(t,s),r()},o=self.webpackChunkReact_production_calendar=self.webpackChunkReact_production_calendar||[];function i(){for(var r,n=0;n<t.length;n++){for(var o=t[n],i=!0,l=1;l<o.length;l++){var c=o[l];0!==e[c]&&(i=!1)}i&&(t.splice(n--,1),r=a(a.s=o[0]))}return 0===t.length&&(a.x(),a.x=function(){}),r}o.forEach(n.bind(null,0)),o.push=n.bind(null,o.push.bind(o));var l=a.x;a.x=function(){return a.x=l||function(){},(r=i)()}}(),a.x()}();