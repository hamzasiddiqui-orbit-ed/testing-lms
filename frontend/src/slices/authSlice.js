// src/slices/authSlice.js
import { createSlice } from '@reduxjs/toolkit';
// import { userApiSlice } from './userApiSlice';

const initialState = {
  userInfo: localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null,
};

const authSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    setCredentials: (state, action) => {
        state.userInfo = action.payload;
        localStorage.setItem('userInfo', JSON.stringify(action.payload));
    },
    logout: (state, action) => {
      state.userInfo = null;
      localStorage.removeItem('userInfo');
    },
  },
  // extraReducers: (builder) => {
  //   builder.addMatcher(userApiSlice.endpoints.login.matchFulfilled, (state, { payload }) => {
  //     state.userInfo = payload;
  //     localStorage.setItem('userInfo', JSON.stringify(payload));
  //   });
  //   builder.addMatcher(userApiSlice.endpoints.logout.matchFulfilled, (state) => {
  //     state.userInfo = null;
  //     localStorage.removeItem('userInfo');
  //   });
  // },
});

export const { setCredentials, logout } = authSlice.actions;

export default authSlice.reducer;
