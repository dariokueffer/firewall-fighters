import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { loadState, saveState } from './localStorage';
import throttle from 'lodash/throttle';

import userReducer from './userSlice';
import eventsReducer from './eventsSlice';
import calendarsReducer from './calendarsSlice';
import appReducer from './appSlice';
import usersReducer from './usersSlice';

const doCreateStore = () => {
  const persistedState = loadState();

  const preloadedState = persistedState ?? {};

  const allReducers = combineReducers({
    user: userReducer,
    events: eventsReducer,
    calendars: calendarsReducer,
    users: usersReducer,
    app: appReducer
  });

  const rootReducer = (state, action) => {
    if (action.type === 'user/userLoggedOut') {
      state = undefined;
    }

    return allReducers(state, action);
  };

  const store = configureStore({
    reducer: rootReducer,
    devTools: process.env.NODE_ENV !== 'production',
    preloadedState
  });

  store.subscribe(
    throttle(() => {
      saveState(store.getState());
    }, 1000)
  );

  return store;
};

export default doCreateStore();
