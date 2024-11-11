import { createSlice } from '@reduxjs/toolkit';
import { userApi } from '../utils/axios';

const usersSlice = createSlice({
  name: 'users',
  initialState: {
    usernames: [],
  },
  reducers: {
    usernamesFetched(state, action) {
      state.usernames = action.payload;
    },
  },
});

export const { usernamesFetched } = usersSlice.actions;
export default usersSlice.reducer;

// Async action to fetch usernames
export const fetchUsernames = (userId) => async (dispatch) => {
  try {
    const response = await userApi.get(`/users/users/${userId}`);
    dispatch(usernamesFetched(response.data));
  } catch (e) {
    console.error("Error fetching usernames:", e);
  }
};
