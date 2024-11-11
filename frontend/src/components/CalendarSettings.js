import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { validateFields } from '../validation';
import { createCalendar, updateCalendar, deleteCalendar, shareCalendar } from '../store/calendarsSlice';
import CalendarSettingsItem from './CalendarSettingsItem';
import { fetchUsernames } from '../store/usersSlice';

const CalendarSettings = () => {
  const dispatch = useDispatch();
  const calendars = useSelector((state) => state.calendars.byId);
  const calendarIds = useSelector((state) => state.calendars.allIds);
  const userId = useSelector((state) => state.user.id);
  const usernames = useSelector((state) => state.users.usernames);

  useEffect(() => {
    dispatch(fetchUsernames(userId));
  }, [dispatch, userId]);

  // sort calendars for render:
  // 1. system cals
  // 2. user default cal
  // 3. remaining user cals
  const calendarIdsSorted = [...calendarIds]
    .sort((a, b) => calendars[b].id - calendars[a].id)
    .sort((a, b) => calendars[b].userDefault - calendars[a].userDefault)
    .sort((a, b) => (calendars[b].user_id === 'system') - (calendars[a].user_id === 'system'));

  return (
    <div>
      {calendarIdsSorted.map((id) => (
        <CalendarSettingsItem
          key={id}
          id={`calendar-${id}`}
          userId={userId}
          inputType="text"
          settingType="name"
          calendar={calendars[id]}
          createAction={createCalendar}
          updateAction={updateCalendar}
          deleteAction={deleteCalendar}
          shareCalendar={shareCalendar}
          validation={validateFields.validateCalendarName}
          usernames={usernames}
        />
      ))}

      <CalendarSettingsItem
        id="new-calendar"
        userId={userId}
        inputType="text"
        settingType="name"
        label="Add new calendar"
        placeholder="Enter calendar name"
        createAction={createCalendar}
        validation={validateFields.validateCalendarName}
        fixedEditMode={true}
      />
    </div>
  );
};

export default CalendarSettings;
