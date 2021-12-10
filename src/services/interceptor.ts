import axios from 'axios';

export const setAuthToken = (token: string) => {
  // set global header to axios requests
  if (token) {
    axios.defaults.headers.common.Authorization = `token ${token}`;
  } else {
    delete axios.defaults.headers.common.Authorization;
  }
};
