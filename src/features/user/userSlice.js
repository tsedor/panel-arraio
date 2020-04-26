import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  loginForm: {
    login: '',
    password: '',
    request: false,
    error: ''
  },
  token: 'abc'
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loginValueChange: (state, action) => {
      state.loginForm.login = action.payload
    },
    passwordValueChange: (state, action) => {
      state.loginForm.password = action.payload
    },
    loginRequestStart: state => {
      state.loginForm.request = true
    },
    loginRequestSuccess: (state, action) => {
      state.loginForm.request = false;
      state.token = action.payload;
    },
    loginRequestError: (state, action) => {
      state.loginForm.request = false;
      state.loginForm.error = action.payload;
    },
    logout: state => {
      state.token = ''
    }
  }
});

export const loginRequest = () => {
  return async dispatch => {
    const { loginRequestStart, loginRequestSuccess, loginRequestError } = userSlice.actions;
    dispatch(loginRequestStart());
    try {
      const { data } = await axios.get('login.json');
      dispatch(loginRequestSuccess(data.token));
    } catch (e) {
      dispatch(loginRequestError(e));
    }
  }
}

export const loginValueChange = userSlice.actions.loginValueChange;
export const passwordValueChange = userSlice.actions.passwordValueChange;
export const logout = userSlice.actions.logout;

export default userSlice.reducer;