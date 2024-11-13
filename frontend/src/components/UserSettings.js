import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { validateFields } from '../validation';
import { updateUser } from '../store/userSlice';
import UserSettingsItem from './UserSettingsItem';

const UserSettings = () => {
  const userId = useSelector((state) => state.user.id);
  const username = useSelector((state) => state.user.username);
  const gmtOffset = useSelector((state) => state.user.gmtOffset);



  return (
    <div>
      <UserSettingsItem
        userId={userId}
        inputType="text"
        settingType="username"
        label="Username"
        value={username}
        validation={validateFields.validateUsername}
        updateAction={updateUser}
        confirmationRequired={false}
      />

      <UserSettingsItem
        userId={userId}
        inputType="password"
        settingType="password"
        label="Password"
        value="****"
        validation={validateFields.validatePassword}
        updateAction={updateUser}
        confirmationRequired={true}
      />
    </div>
  );
};

export default UserSettings;
