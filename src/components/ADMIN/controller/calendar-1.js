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
