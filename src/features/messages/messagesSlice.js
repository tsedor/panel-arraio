import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  messages: [],
  request: false,
  error: ''
};

const messagesSlice = createSlice({
  name: 'messages',
  initialState,
  reducers: {
    requestStart: state => {
      state.request = true;
    },
    requestSuccess: (state, action) => {
      state.request = false;
      state.messages = action.payload;
    },
    requestError: (state, action) => {
      state.request = false;
      state.error = action.payload
    }
  }
})

export const getMessages = () => {
  return async dispatch => {
    const { requestStart, requestSuccess, requestError } = messagesSlice.actions;
    dispatch(requestStart());
    try {
      const { data } = await axios.get('messages.json');
      dispatch(requestSuccess(data));
    } catch (e) {
      dispatch(requestError(e));
    }
  }
}

export default messagesSlice.reducer;