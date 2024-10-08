import axios from 'axios';
import store from '../store/createStore';
import { accessTokenUpdated, logoutUser } from '../store/userSlice';

const userApi = axios.create({
  baseURL: `${process.env.REACT_APP_API_URL}`,
  headers: {
    'Content-Type': 'application/json'
  }
});

userApi.interceptors.request.use(
  (config) => {
    const token = getLocalAccessToken();
    if (token) {
      config.headers['x-access-token'] = token;
    }
    return config;
  },
  (e) => {
    return Promise.reject(e);
  }
);

userApi.interceptors.response.use(
  (res) => {
    return res;
  },
  async (e) => {
    const originalConfig = e.config;

    if (e.response) {
      // Access Token was expired
      if (e.response.status === 401 && !originalConfig._retry) {
        originalConfig._retry = true;

        try {
          const rs = await refreshToken();
          const { accessToken } = rs.data;

          userApi.defaults.headers.common['x-access-token'] = accessToken;

          // authorize user
          store.dispatch(accessTokenUpdated(accessToken));

          return userApi(originalConfig);
        } catch (_error) {
          if (_error.response && _error.response.data) {
            // refresh token was expired - log out user
            if (_error.response.data.errorCode === 'refreshToken') {
              console.log('Please login again.');
              store.dispatch(logoutUser());
              // End request by sending unresolved promise
              // see https://github.com/axios/axios/issues/715
              return new Promise(() => { });
            } else {
              throw _error;
            }
          }
          throw _error;
        }
      }
    }
    throw e;
  }
);

const getLocalAccessToken = () => {
  const accessToken = store.getState().user.accessToken;
  return accessToken;
};

const getLocalRefreshToken = () => {
  const refreshToken = store.getState().user.refreshToken.token;
  return refreshToken;
};

const refreshToken = () => {
  return userApi.post('users/refreshtoken', {
    refreshToken: getLocalRefreshToken()
  });
};

export { userApi };
