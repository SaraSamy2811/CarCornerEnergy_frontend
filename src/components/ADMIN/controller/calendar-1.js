// !function(){var e={311:function(){!function(){const e={init(){const e=document.querySelector("#bsb-calendar-1");new FullCalendar.Calendar(e,{themeSystem:"bootstrap5",initialView:"dayGridMonth",fixedWeekCount:!1,headerToolbar:{start:"title",center:"",end:"prev,next"}}).render()}};function n(){e.init()}"loading"===document.readyState?document.addEventListener("DOMContentLoaded",n):n(),window.addEventListener("load",(function(){}),!1)}()}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var i=n[r]={exports:{}};return e[r](i,i.exports,t),i.exports}t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,{a:n}),n},t.d=function(e,n){for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},function(){"use strict";t(311)}()}();


import React, { useEffect } from 'react';
import FullCalendar from '@fullcalendar/react'; // Install the '@fullcalendar/react' package

const MyCalendar = () => {
  useEffect(() => {
    const calendarEl = document.getElementById('bsb-calendar-1');
    const calendar = new FullCalendar.Calendar(calendarEl, {
      themeSystem: 'bootstrap5',
      initialView: 'dayGridMonth',
      fixedWeekCount: false,
      headerToolbar: {
        start: 'title',
        center: '',
        end: 'prev,next',
      },
    });
    calendar.render();
  }, []);

  return (
    <div id="bsb-calendar-1"></div>
  );
};

export default MyCalendar;
