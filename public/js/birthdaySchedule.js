!function(){"use strict";var e,t={333:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=o(r(294)),n=o(r(594));function o(e){return e&&e.__esModule?e:{default:e}}t.default=function(e){var t=e.days,r=e.handleClick,o=e.handleMouseOver,l=e.handleMouseOut;return a.default.createElement("div",{className:"calendar-body"},t.map((function(e,t){return a.default.createElement("div",{key:t,className:"calendar-body-row"},e.map((function(e){return a.default.createElement(n.default,{el:e,key:e.id,handleClick:r,handleMouseOver:o,handleMouseOut:l})})))})))}},594:function(e,t,r){function a(e){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a(e)}function n(e){return n="function"==typeof Symbol&&"symbol"==a(Symbol.iterator)?function(e){return a(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":a(e)},n(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=n(e)&&"function"!=typeof e)return{default:e};var r=l(t);if(r&&r.has(e))return r.get(e);var a={__proto__:null},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if("default"!==i&&{}.hasOwnProperty.call(e,i)){var c=o?Object.getOwnPropertyDescriptor(e,i):null;c&&(c.get||c.set)?Object.defineProperty(a,i,c):a[i]=e[i]}return a.default=e,r&&r.set(e,a),a}(r(294));function l(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(l=function(e){return e?r:t})(e)}t.default=function(e){var t=e.el,r=e.handleMouseOut,a=e.handleMouseOver,n=e.handleClick,l=(0,o.useRef)();return o.default.createElement("div",{className:t.className.join(" "),key:t.id,onClick:function(){return n(t.time,l)},onMouseOver:function(){return a(t.time,l)},onMouseOut:function(){return r(t.time,l)},ref:l},o.default.createElement("div",{className:"calendar-body-day"},t.day),t.hint.length?t.hint.map((function(e,t){return o.default.createElement("div",{className:"calendar-body-hint",key:t},o.default.createElement("div",{className:"calendar-body-title"},e.title),o.default.createElement("div",{className:"calendar-body-desc"},e.desc))})):null)}},502:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a,n=(a=r(294))&&a.__esModule?a:{default:a},o=r(174);function l(e){return function(e){if(Array.isArray(e))return i(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return i(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?i(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,a=new Array(t);r<t;r++)a[r]=e[r];return a}t.default=function(e){var t=e.startDayWeek,r=e.lang,a=l(o.days[r]),i=0==t?[].concat(l(a.slice(6)),l(a.slice(0,6))):a;return n.default.createElement("div",{className:"calendar-day"},i.map((function(e,t){return n.default.createElement("div",{className:"calendar-day-col",key:t},e)})))}},669:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a,n=(a=r(294))&&a.__esModule?a:{default:a},o=r(30);function l(e){return function(e){if(Array.isArray(e))return i(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return i(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?i(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,a=new Array(t);r<t;r++)a[r]=e[r];return a}t.default=function(e){var t=e.lang,r=e.year,a=e.month,i=e.visibleYear,c=l(o.months[t.toLowerCase()]),d=new Date(r,a),u=c[d.getMonth()],s=i?d.getFullYear():"";return n.default.createElement("div",{className:"calendar-head"},u," ",s)}},989:function(e,t,r){t.Z=void 0;var a=d(r(294)),n=d(r(669)),o=d(r(502)),l=d(r(333)),i=r(600),c=r(777);function d(e){return e&&e.__esModule?e:{default:e}}t.Z=function(e){var t=e.lang,r=void 0===t?"ru":t,d=e.year,u=void 0===d?"2024":d,s=e.month,f=void 0===s?"1":s,y=e.visibleYear,p=void 0===y||y,m=e.startDayWeek,b=void 0===m?1:m,h=e.calClass,v=void 0===h?"":h,g=e.holiday,x=void 0===g?[]:g,w=e.verticalDay,k=void 0!==w&&w,D=e.handleClick,O=void 0===D?function(){return null}:D,S=e.handleMouseOver,M=void 0===S?function(){return null}:S,j=e.handleMouseOut,E=void 0===j?function(){return null}:j,C=f-1,T=(0,c.dayInMonth)(u,C),A=(0,c.dayForWeek)({year:u,month:C,holiday:x,startDayWeek:b,verticalDay:k,stopDay:T}),N="calendar ".concat(i.monthClass[C]," ").concat(v),P="calendar-day-display-".concat(k?"vertical":"horisontal");return k&&(P+=" calendar-day-display-size-".concat(A[0].length)),a.default.createElement("div",{className:N},a.default.createElement(n.default,{lang:r,year:u,month:C,visibleYear:p}),a.default.createElement("div",{className:P},a.default.createElement(o.default,{startDayWeek:b,lang:r}),a.default.createElement(l.default,{days:A,handleClick:O,handleMouseOver:M,handleMouseOut:E})))}},174:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.days=void 0;t.days={ru:["Пн","Вт","Ср","Чт","Пт","Сб","Вс"],en:["Mo","Tu","We","Th","Fr","Sa","Su"],de:["Mo","Di","Mi","Do","Fr","Sa","So"],fr:["Lu","Ma","Me","Je","Ve","Sa","Di"],su:["Ma","Ti","Ke","To","Pe","La","Su"]}},30:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.months=void 0;t.months={ru:["Январь","Февраль","Март","Апрель","Май","Июнь","Июль","Август","Сентябрь","Октябрь","Ноябрь","Декабрь"],en:["January","February","March","April","May","June","July","August","September","October","November","December"],de:["Januar","Februar","März","April","Mai","Juni","Juli","August","September","Oktober","November","Dezember"],fr:["Janvier","Février","Mars","Avril","Mai","Juin","Juillet","Août","Septembre","Octobre","Novembre","Décembre"],su:["Tammikuu","Helmikuu","Maaliskuu","Huhtikuu","Toukokuu","Kesäkuu","Heinäkuu","Elokuu","Syyskuu","Lokakuu","Marraskuu","Joulukuu"]}},600:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.monthClass=void 0;t.monthClass=["january","february","march","april","may","june","july","august","september","october","november","december"]},777:function(e,t){function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}function a(e){return a="function"==typeof Symbol&&"symbol"==r(Symbol.iterator)?function(e){return r(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":r(e)},a(e)}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t,r){return(t=function(e){var t=function(e,t){if("object"!=a(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!=a(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==a(t)?t:t+""}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e){return function(e){if(Array.isArray(e))return c(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return c(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?c(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,a=new Array(t);r<t;r++)a[r]=e[r];return a}Object.defineProperty(t,"__esModule",{value:!0}),t.numberDayInYear=t.getWeeksInMonth=t.dayInMonth=t.dayForWeek=void 0;var d=["calendar-body-col"],u=function(e,t){var r=new Date,a=r.setHours(0,0,0,0),n=r.getMonth(),o=r.getFullYear();return{isCurDate:n==e&&o==t,curDate:a}},s=function(e){var t=e.year,r=e.month,a=e.countDate,n=e.startDayWeek,l=e.prevNext,i=[],c="prev"==l?a-n:6-a+n,s=u("prev"==l?r-1<0?11:r-1:r+1>11?0:r+1,"prev"==l?r-1<0?t-1:t:r+1>11?+t+1:t);c="prev"==l?c<0?7-n:c:c=7==c?0:c;for(var f=0;f<c;f++){var y="prev"==l?new Date(t,r,-f):new Date(t,r+1,f+1);y.setHours(0,0,0,0);var p=0==y.getDay()||6==y.getDay()?"output":"";y.getTime()==s.curDate&&(p+=" curDate");var m={id:y.getTime(),time:y.getTime(),day:y.getDate(),className:[].concat(d,["prev"==l?"prev":"next",p]),hint:[]};"prev"==l?i.unshift(o({},m)):i.push(o({},m))}return i};t.dayForWeek=function(e){var t=e.year,r=e.month,a=e.stopDay,n=e.startDayWeek,l=e.holiday,c=e.verticalDay,f=[],y=u(r,t),p=r-1<0?11:r-1,m=r+1>11?0:r+1;l.length&&(l=function(e){var t=e.holiday,r=e.month,a=e.pMonth,n=e.nMonth;return t.reduce((function(e,t){return t.month==r||t.month==a||t.month==n?[].concat(i(e),[o(o({},t),{},{class:t.class?t.class:"",hint:t.hint?t.hint:[],id:new Date(t.year,t.month,t.day).setHours(0,0,0,0)})]):e}),[])}({holiday:l,month:r,pMonth:p,nMonth:m}));for(var b=1;b<=a;b++){var h=new Date(t,r,b),v="";h.setHours(0,0,0,0),v=0==h.getDay()||6==h.getDay()?"output":"",h.getTime()==y.curDate&&(v+=" curDate"),h.getDay()==n&&f.push([]);var g={id:h.getTime(),time:h.getTime(),day:h.getDate(),className:[].concat(d,[v]),hint:[]};f.length||f.push([]),f[f.length-1].push(g)}return f=function(e){var t=e.days,r=e.year,a=e.month,n=e.startDayWeek,o=e.stopDay,l=new Date(r,a,1);if(l.setHours(0,0,0,0),t[0].length<7){var c=s({year:r,month:a,startDayWeek:n,prevNext:"prev",countDate:l.getDay()});t[0]=[].concat(i(c),i(t[0]))}if(t[t.length-1].length<7){l.setDate(o);var d=s({year:r,month:a,startDayWeek:n,prevNext:"next",countDate:l.getDay()});t[t.length-1]=[].concat(i(t[t.length-1]),i(d))}return t}({days:f,year:t,month:r,startDayWeek:n,stopDay:a}),f=function(e,t){var r=i(e);return i(t).map((function(e){return i(e.map((function(e){var t=r.findIndex((function(t){return t.id==e.id}));return-1!==t?o(o({},e),{},{className:[].concat(i(e.className),[r[t].class?r[t].class:"holiday"]),hint:[].concat(i(e.hint),i(r[t].hint))}):o({},e)})))}))}(l,f),c&&(f=function(e){var t=[[],[],[],[],[],[],[]];return e.forEach((function(e){e.forEach((function(e,r){t[r].push(e)}))})),t}(f)),f},t.dayInMonth=function(e,t){return new Date(e,t+1,0).getDate()},t.numberDayInYear=function(e,t){var r=new Date(Number(t)),a=new Date(e-1,11,31);return(r.getTime()-a.getTime())/864e5},t.getWeeksInMonth=function(e,t){var r=new Date(e,t+1,0);return Math.ceil((r.getDate()-(r.getDay()?r.getDay():7))/7)+1}},192:function(e,t,r){var a=r(294),n=r(745),o=r(989).Z,l=2023,i=[{year:l,month:0,day:13,class:"",hint:[{title:"День рождения Ермолова Константина Петровича",desc:"Костику 24 года, он любит панк-рок, ска. Костик работает в отделе веб-разработки, младшим веб-программистом. "}]},{year:l,month:1,day:10,class:"",hint:[{title:"День рождения Иванова Дмитрия Евгеньевича",desc:"Дмитрию 32 года он любит пиво и хардкор. Дима работает в отделе веб-дизайна, старшим веб-дизайнером. "}]},{year:l,month:2,day:9,class:"",hint:[{title:"День рождения Романова Павла Евгеньевича",desc:"Павлу 30 лет, он любит читать, слушать музыку, рисовать. Паша работает в отделе веб-разработки, верстальщиком."}]},{year:l,month:3,day:8,class:"",hint:[{title:"День рождения Сазонова Петра Алексеевича",desc:"Петру 36 лет, он любит спорт. Петр работает в отделе веб-разработки, ведущим программистом"}]},{year:l,month:4,day:21,class:"",hint:[{title:"День рождения Петренко Константина Михайловича",desc:"Костику 26 лет он ходить в походы. Костик работает в отделе SEO-продвижения, младши копирайтером."}]},{year:l,month:5,day:18,class:"",hint:[{title:"День рождения Колпакова Евгения Борисовича",desc:"Жени 33 года он любит свою работу. Женя работает в отделе SEO-продвижения,  копирайтером."}]},{year:l,month:6,day:24,class:"",hint:[{title:"День рождения Николаева Михаила Романовича",desc:"Мише 20 лет, он любит учиться. Миша работает в отделе продаж, помощником менеджера продаж."}]},{year:l,month:7,day:13,class:"",hint:[{title:"День рождения Насонова Максима Петровича",desc:"Максу 25 лет он любит слушать музыку. Макс работает в отделе веб-разработки, младшим веб-программистом. "}]},{year:l,month:8,day:25,class:"",hint:[{title:"День рождения Мирошниченко Алексея Михайловича",desc:"Алексею 42 года он любит шахматы. Алексей работает директором по развитию."}]},{year:l,month:9,day:6,class:"",hint:[{title:"День рождения Орлова Дмитрия Николаевича",desc:"Диме 30 лет, он любит велоспорт. Дима работает в отделе продаж. Ведущим аккаунт-менеджером."}]},{year:l,month:10,day:25,class:"",hint:[{title:"День рождения Козлова Дмитрия Олеговича",desc:"Диме 36 лет он любит русский рок. Дима работает в отделе SEO-продвижения, старшим копирайтером"}]},{year:l,month:11,day:22,class:"",hint:[{title:"День рождения Кондратьева Романа Петровича",desc:"Роману 27 лет он любит играть в шахматы. Роман работает в отделе веб-разработки, ведущим веб-программистом. "}]}],c=r(379),d=r.n(c),u=r(795),s=r.n(u),f=r(569),y=r.n(f),p=r(565),m=r.n(p),b=r(216),h=r.n(b),v=r(589),g=r.n(v),x=r(709),w={};w.styleTagTransform=g(),w.setAttributes=m(),w.insert=y().bind(null,"head"),w.domAPI=s(),w.insertStyleElement=h();d()(x.Z,w),x.Z&&x.Z.locals&&x.Z.locals;var k=r(561),D={};D.styleTagTransform=g(),D.setAttributes=m(),D.insert=y().bind(null,"head"),D.domAPI=s(),D.insertStyleElement=h();d()(k.Z,D),k.Z&&k.Z.locals&&k.Z.locals;var O=r(92),S={};S.styleTagTransform=g(),S.setAttributes=m(),S.insert=y().bind(null,"head"),S.domAPI=s(),S.insertStyleElement=h();d()(O.Z,S),O.Z&&O.Z.locals&&O.Z.locals;function M(e){return M="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},M(e)}function j(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function E(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?j(Object(r),!0).forEach((function(t){C(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):j(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function C(e,t,r){return(t=function(e){var t=function(e,t){if("object"!==M(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var a=r.call(e,t||"default");if("object"!==M(a))return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===M(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function T(e){return function(e){if(Array.isArray(e))return P(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||N(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function A(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var a,n,o,l,i=[],c=!0,d=!1;try{if(o=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;c=!1}else for(;!(c=(a=o.call(r)).done)&&(i.push(a.value),i.length!==t);c=!0);}catch(e){d=!0,n=e}finally{try{if(!c&&null!=r.return&&(l=r.return(),Object(l)!==l))return}finally{if(d)throw n}}return i}}(e,t)||N(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function N(e,t){if(e){if("string"==typeof e)return P(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?P(e,t):void 0}}function P(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,a=new Array(t);r<t;r++)a[r]=e[r];return a}var _=document.getElementById("app"),I=function(){var e=A((0,a.useState)(2024),2),t=e[0],r=(e[1],A((0,a.useState)((new Date).getMonth()+1),2)),n=r[0],l=r[1],c=A((0,a.useState)({birthdays:T(i),form:{time:"",isDelete:!1,date:{value:"",alarmText:""},title:{value:"",alarmText:""},text:{value:"",alarmText:""}}}),2),d=c[0],u=c[1],s=function(e){var t=d.birthdays,r=d.form,a=e.target;u({birthdays:T(t),form:E(E({},r),{},C({},a.name,{value:a.value,alarmText:""}))})},f=function(e){var t=new Date(e);return{year:t.getFullYear(),month:t.getMonth(),day:t.getDate()}},y=function(e){var t=f(e);return"".concat(t.day," ").concat(["января","февраля","марта","апреля","мая","июня","июля","августа","сентября","октября","ноября","декабря"][t.month]," ").concat(t.year)};return a.createElement("div",{className:"exampleCalendar"},a.createElement("h2",null,"Выбрать дату"),a.createElement("form",{onSubmit:function(e){e.preventDefault();var t=d.form,r=d.birthdays,a=t.date.value?"":"Поле не заполнено",n=t.title.value?"":"Поле не заполнено",o=t.text.value?"":"Поле не заполнено";if(a||n||o)u({birthdays:T(r),form:{time:t.time,isDelete:t.isDelete,title:{value:t.title.value,alarmText:n},text:{value:t.text.value,alarmText:o},date:{value:t.date.value,alarmText:a}}});else{var l=f(t.time),i=r.filter((function(e){return!(e.day==l.day&&e.month==l.month)}));u({birthdays:[].concat(T(i),[E(E({},l),{},{class:"holiday",hint:[{title:t.title.value,desc:t.text.value}]})]),form:E(E({},t),{},{isDelete:!0})})}}},a.createElement("div",{className:d.form.date.alarmText?"row alarm":"row"},a.createElement("div",{className:"dateCheck"},a.createElement("div",{className:"prevM",onClick:function(){l(n<2?n:n-1)}},"◄"),a.createElement("div",{className:"nextM",onClick:function(){l(n>11?n:n+1)}},"►"),a.createElement(o,{visibleYear:!1,year:t,month:n,holiday:d.birthdays,handleClick:function(e){var t=d.birthdays,r=f(e),a=y(e),n="",o="",l=!1,i=t.findIndex((function(e){return e.day==r.day&&e.month==r.month&&!e.new})),c=t.reduce((function(e,t){return t.new?T(e):[].concat(T(e),[E(E({},t),{},{class:""})])}),[]);-1!=i?(l=!0,n=t[i].hint[0].title,o=t[i].hint[0].desc,c=c.map((function(e,t){var r=t==i?"selected holiday":"";return E(E({},e),{},{class:r})}))):c=[].concat(T(c),[{year:r.year,month:r.month,day:r.day,hint:[],class:"selected",new:!0}]),u({birthdays:T(c),form:{time:e,isDelete:l,title:{value:n,alarmText:""},text:{value:o,alarmText:""},date:{value:a,alarmText:""}}})},handleMouseOver:function(e){y(e)},handleMouseOut:function(e){y(e)}})),a.createElement("div",{className:"chosenDate"},d.form.date.value?"Дата: "+d.form.date.value:"Дата не выбрана")),a.createElement("div",{className:d.form.title.alarmText?"row alarm":"row"},a.createElement("label",null,"Заголовок сообщения"),a.createElement("input",{type:"text",name:"title",value:d.form.title.value,onChange:s}),d.form.title.alarmText?a.createElement("div",{className:"hint"},d.form.title.alarmText):null),a.createElement("div",{className:d.form.text.alarmText?"row alarm":"row"},a.createElement("label",null,"Текст сообщения"),a.createElement("textarea",{type:"text",name:"text",value:d.form.text.value,onChange:s}),d.form.text.alarmText?a.createElement("div",{className:"hint"},d.form.text.alarmText):null),a.createElement("div",{className:"row space-between-align"},a.createElement("button",{className:"mdc-button"},"Сохранить"),d.form.isDelete?a.createElement("button",{className:"mdc-button",onClick:function(e){e.preventDefault();var t=d.birthdays,r=d.form,a=f(d.form.time),n=t.filter((function(e){return e.month==a.month?e.day!=a.day:e.month!=a.month}));u({birthdays:T(n),form:E(E({},r),{},{isDelete:!1,date:{value:"",alarmText:""},title:{value:"",alarmText:""},text:{value:"",alarmText:""}})})}},"Удалить событие"):null)),a.createElement("h2",null,"Дни рождения сотрдников на ",t," год"),a.createElement("div",{className:"exampleCalendar-group"},[1,2,3,4,5,6,7,8,9,10,11,12].map((function(e){return a.createElement("div",{key:e,className:"exampleCalendar-item"},a.createElement(o,{visibleYear:!1,year:t,month:e,holiday:d.birthdays}))}))))};n.createRoot(_).render(a.createElement(I,null))},709:function(e,t,r){var a=r(81),n=r.n(a),o=r(645),l=r.n(o)()(n());l.push([e.id,":root{--pc-text-color: #000;--pc-border: 1px solid #424242;--pc-cell-border: var(--pc-border);--pc-day-border: var(--pc-border);--pc-font: 16px/120% 'RobotoDraft';--pc-bg: inherit;--pc-head-bg: #e6ee9c;--pc-head-padding: 22px 0;--pc-head-font: inherit;--pc-head-day-bg: #dce775;--pc-head-day-padding: 30% 0;--pc-head-day-font: inherit;--pc-day-bg: #aed581;--pc-output-bf: #ff5252;--pc-holiday-bg: #ff1744;--pc-cell-padding: 20% 0;--pc-day-width: 34px;--pc-day-height: 34px;--pc-day-font: inherit;--pc-workday-bg: #7cb342;--pc-curr-day-cell-bg: #ffd740;--pc-curr-day-bg: #ffc400;--pc-hint-width: 280px;--pc-hint-padding: 15px;--pc-hint-border-radius: 10px;--pc-hint-box-shadow: 0 0 10px rgba(0, 0, 0, .5);--pc-hint-bg: #dce775;--pc-hint-title-color: inherit;--pc-hint-title-font: 16px/120% 'RobotoDraft';--pc-hint-title-margin: 0 0 5px;--pc-hint-desc-font: 14px/140% 'RobotoDraft';--pc-hint-desc-color: inherit;--pc-no-active-day-bg: var(--pc-day-bg);--pc-no-active-day-opacity: .4}.calendar{color:var(--pc-text-color);width:100%;text-align:center;border:var(--pc-border);background:var(--pc-bg);font:var(--pc-font)}.calendar .prev,.calendar .next{background:var(--pc-no-active-day-bg)}.calendar .prev div,.calendar .next div{opacity:var(--pc-no-active-day-opacity)}.calendar .prev:hover .calendar-body-hint,.calendar .next:hover .calendar-body-hint{top:-3000px;left:-3000px}.calendar .curDate{background:var(--pc-curr-day-cell-bg)}.calendar .curDate .calendar-body-day{background-color:var(--pc-curr-day-bg)}.calendar .output{background-color:var(--pc-output-bf)}.calendar .holiday{cursor:pointer;background-color:var(--pc-holiday-bg)}.calendar-head{padding:var(--pc-head-padding);background:var(--pc-head-bg);font:var(--pc-head-font)}.calendar-day{width:100%;display:grid}.calendar-day-col{display:flex;align-items:center;justify-content:center;padding:var(--pc-head-day-padding);background:var(--pc-head-day-bg);border:var(--pc-day-border);border-right:none;border-bottom:none;font:var(--pc-head-day-font)}.calendar-day-col:first-of-type{border-left:none}.calendar-body-row{display:grid}.calendar-body-day{font:var(--pc-day-font);width:var(--pc-day-width);height:var(--pc-day-height);line-height:var(--pc-day-height);display:inline-block;border-radius:50%}.calendar-body-row{width:100%}.calendar-body-col{position:relative;padding:var(--pc-cell-padding);border:var(--pc-cell-border);border-right:none;border-bottom:none;background-color:var(--pc-day-bg);transition:background-color .15s ease-in-out 0s}.calendar-body-col:first-of-type{border-left:none}.calendar-body-col:hover{z-index:2}.calendar-body-col:hover .calendar-body-hint{top:100%;left:50%;transform:translateX(-50%)}.calendar-body-hint{top:-3000px;left:-3000px;position:absolute;width:var(--pc-hint-width);padding:var(--pc-hint-padding);border-radius:var(--pc-hint-border-radius);background-color:var(--pc-hint-bg);box-shadow:var(--pc-hint-box-shadow)}.calendar-body-title{color:var(--pc-hint-title-color);font:var(--pc-hint-title-font);margin:var(--pc-hint-title-margin)}.calendar-body-desc{color:var(--pc-hint-desc-color);font:var(--pc-hint-desc-font)}.calendar .workDay{background-color:var(--pc-workday-bg)}.calendar .calendar-day-display-size-4{grid-template-columns:repeat(5, 1fr)}.calendar .calendar-day-display-size-4 .calendar-body{grid-column:span 4}.calendar .calendar-day-display-size-4 .calendar-body-row{grid-template-columns:repeat(4, 1fr)}.calendar .calendar-day-display-size-5{grid-template-columns:repeat(6, 1fr)}.calendar .calendar-day-display-size-5 .calendar-body{grid-column:span 5}.calendar .calendar-day-display-size-5 .calendar-body-row{grid-template-columns:repeat(5, 1fr)}.calendar .calendar-day-display-size-6{grid-template-columns:repeat(7, 1fr)}.calendar .calendar-day-display-size-6 .calendar-body{grid-column:span 6}.calendar .calendar-day-display-size-6 .calendar-body-row{grid-template-columns:repeat(6, 1fr)}.calendar-day-display-horisontal .calendar-day{display:grid;grid-template-columns:repeat(7, 1fr)}.calendar-day-display-horisontal .calendar-body-row{display:grid;grid-template-columns:repeat(7, 1fr)}.calendar-day-display-vertical{display:grid}.calendar-day-display-vertical .calendar-day-col,.calendar-day-display-vertical .calendar-body-col{padding:10% 0}.calendar-day-display-vertical .calendar-day{width:auto;display:grid;grid-template-columns:1fr;grid-template-rows:repeat(7, 1fr)}.calendar-day-display-vertical .calendar-day-col{width:auto;border-left:none}.calendar-day-display-vertical .calendar-body-col{width:auto}.calendar-day-display-vertical .calendar-body-col:first-of-type{border-left:var(--pc-cell-border)}.calendar-day-display-vertical .calendar-body-row{display:grid}\n",""]),t.Z=l},92:function(e,t,r){var a=r(81),n=r.n(a),o=r(645),l=r.n(o)()(n());l.push([e.id,'.dateCheck .calendar{-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none;user-select:none}.dateCheck .calendar .selected{background-color:#f97d95}.dateCheck .calendar .prev,.dateCheck .calendar .next{cursor:text}.dateCheck .calendar .prev:hover,.dateCheck .calendar .next:hover{background-color:#aed581}.dateCheck .calendar .prev.output:hover,.dateCheck .calendar .next.output:hover{background-color:#ff5252}.dateCheck .calendar-body-col{cursor:pointer}.dateCheck .calendar-body-col:hover{background-color:#f97d95}form{max-width:600px;margin:30px auto;position:relative}form textarea,form input[type="text"]{display:block;width:100%;margin:10px 0;padding:10px 15px;border-radius:5px;box-sizing:border-box;font-size:1rem;font-weight:400;line-height:1.5;color:#212529;background-color:#fff;border:1px solid #ced4da;appearance:none;outline:none;font:16px/120% \'RobotoDraft\';transition:border-color .15s ease-in-out, box-shadow .15s ease-in-out}form textarea.focus,form textarea:focus,form input[type="text"].focus,form input[type="text"]:focus{color:#212529;border-color:#86b7fe;box-shadow:0 0 0 2px rgba(13,110,253,0.25)}form textarea:placeholder,form input[type="text"]:placeholder{color:#6c757d;opacity:1}form .alarm .chosenDate{color:#ff1744}form .alarm textarea,form .alarm input[type="text"]{border-color:#ff1744}form .alarm textarea:focus,form .alarm input[type="text"]:focus{box-shadow:0 0 0 2px rgba(255,0,0,0.25)}form textarea{height:186px;resize:vertical}form .row{text-align:left;margin:20px 0}form .hint{color:#ff1744}form .space-between-align{display:flex;justify-content:space-between}form .dateCheck{width:100%;margin:0 0 30px;position:relative;background-color:#fff;box-shadow:0 0 30px rgba(0,0,0,0.5)}form .nextM,form .prevM{-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none;user-select:none}form .nextM,form .prevM{top:15px;width:30px;height:30px;color:#fff;cursor:pointer;position:absolute;border-radius:50%;text-align:center;line-height:30px;font-size:14px;background-color:#ffab40;transition:background-color .15s ease-in-out}form .nextM:hover,form .prevM:hover{background-color:#ff9100}form .nextM:active,form .prevM:active{background-color:#ff6d00}form .prevM{left:30px}form .nextM{right:30px}\n',""]),t.Z=l},561:function(e,t,r){var a=r(81),n=r.n(a),o=r(645),l=r.n(o)()(n());l.push([e.id,".exampleCalendar{text-align:center;font-size:16px;font-family:'RobotoDraft'}.exampleCalendar-lang{max-width:100px;text-align:left;margin:5px auto}.exampleCalendar-lang label{padding-left:5px;-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none;user-select:none}.exampleCalendar-wrap{width:100%;max-width:600px;display:block;margin:20px auto}.exampleCalendar-group{display:flex;flex-wrap:wrap;max-width:1400px;margin:40px auto;justify-content:center;font-family:'RobotoDraft'}.exampleCalendar-group h2{width:100%;text-align:center}.exampleCalendar-item{width:30%;max-width:480px;min-width:300px;margin:20px}.exampleCalendar .mdc-button{font-family:'RobotoDraft', sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:.875rem;line-height:2.25rem;font-weight:500;letter-spacing:.0892857143em;text-decoration:none;text-transform:uppercase;padding:5px 18px;display:inline-flex;position:relative;align-items:center;justify-content:center;box-sizing:border-box;min-width:64px;border:none;outline:none;line-height:inherit;-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none;user-select:none;appearance:none;overflow:visible;vertical-align:middle;border-radius:4px;background-color:#fdd835;transition:background-color .15s ease-in-out, box-shadow .15s ease-in-out}.exampleCalendar .mdc-button::-moz-focus-inner{padding:0;border:0}.exampleCalendar .mdc-button:hover{cursor:pointer;background-color:#fbc02d}.exampleCalendar .mdc-button:active{background-color:#f2c80d}.exampleCalendar .mdc-button:disabled{background-color:transparent;color:rgba(0,0,0,0.37);cursor:default;pointer-events:none}.exampleCalendar .mdc-button{height:36px}.exampleCalendar-btn-block{display:flex;gap:15px 10px;justify-content:center;flex-wrap:wrap}@media screen and (max-width: 900px){.calendar-body-col:nth-of-type(1):hover .calendar-body-hint{left:0;margin-left:0}.calendar-body-col:nth-of-type(2):hover .calendar-body-hint{left:-100%;margin-left:0}.calendar-body-col:nth-of-type(5):hover .calendar-body-hint{left:auto;right:-200%;margin-left:0}.calendar-body-col:nth-of-type(6):hover .calendar-body-hint{left:auto;right:-100%;margin-left:0}.calendar-body-col:nth-of-type(7):hover .calendar-body-hint{left:auto;right:0;margin-left:0}}\n",""]),t.Z=l}},r={};function a(e){var n=r[e];if(void 0!==n)return n.exports;var o=r[e]={id:e,exports:{}};return t[e](o,o.exports,a),o.exports}a.m=t,e=[],a.O=function(t,r,n,o){if(!r){var l=1/0;for(u=0;u<e.length;u++){r=e[u][0],n=e[u][1],o=e[u][2];for(var i=!0,c=0;c<r.length;c++)(!1&o||l>=o)&&Object.keys(a.O).every((function(e){return a.O[e](r[c])}))?r.splice(c--,1):(i=!1,o<l&&(l=o));if(i){e.splice(u--,1);var d=n();void 0!==d&&(t=d)}}return t}o=o||0;for(var u=e.length;u>0&&e[u-1][2]>o;u--)e[u]=e[u-1];e[u]=[r,n,o]},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,{a:t}),t},a.d=function(e,t){for(var r in t)a.o(t,r)&&!a.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},function(){var e={93:0};a.O.j=function(t){return 0===e[t]};var t=function(t,r){var n,o,l=r[0],i=r[1],c=r[2],d=0;if(l.some((function(t){return 0!==e[t]}))){for(n in i)a.o(i,n)&&(a.m[n]=i[n]);if(c)var u=c(a)}for(t&&t(r);d<l.length;d++)o=l[d],a.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return a.O(u)},r=self.webpackChunkreact_production_calendar=self.webpackChunkreact_production_calendar||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}(),a.nc=void 0;var n=a.O(void 0,[592],(function(){return a(192)}));n=a.O(n)}();