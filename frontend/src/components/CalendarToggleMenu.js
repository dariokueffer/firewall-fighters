import React from 'react';
import CalendarToggleMenuItem from './CalendarToggleMenuItem';

const CalendarToggleMenu = ({ calendars, calendarIds }) => {
  // sort calendars for render:
  // 1. system cals
  // 2. user default cal
  // 3. remaining user cals
  const orderedCalendarIds = Object.keys(calendars)
    .sort((a, b) => calendars[b].userDefault - calendars[a].userDefault)
    .sort((a, b) => (calendars[b].user_id === 'system') - (calendars[a].user_id === 'system'));

  const sharedCalendars = Object.values(calendars).filter(calendar => calendar.isShared);
  const notSharedCalendars = Object.values(calendars).filter(calendar => !calendar.isShared);

  return (
    <div>
      {/* Shared calendars */}
      <h5>Shared with me</h5>
      {sharedCalendars.length > 0 ? (
        sharedCalendars.map((calendar) => (
          <CalendarToggleMenuItem key={calendar.id} id={calendar.id} calendar={calendar} />
        ))
      ) : (
        <p>No shared calendars</p>
      )}

      {/* Non-shared calendars */}
      <h5>My Calendars</h5>
      {notSharedCalendars.length > 0 ? (
        notSharedCalendars.map((calendar) => (
          <CalendarToggleMenuItem key={calendar.id} id={calendar.id} calendar={calendar} />
        ))
      ) : (
        <p>No personal calendars</p>
      )}
    </div>
  );
};

export default CalendarToggleMenu;
