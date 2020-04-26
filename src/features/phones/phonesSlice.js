import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  phones: [],
  request: false,
  error: ''
};

const phonesSlice = createSlice({
  name: 'phones',
  initialState,
  reducers: {
    requestStart: state => {
      state.request = true;
    },
    requestSuccess: (state, action) => {
      state.request = false;
      state.phones = action.payload;
    },
    requestError: (state, action) => {
      state.request = false;
      state.error = action.payload
    }
  }
})

export const getPhones = () => {
  return async dispatch => {
    const { requestStart, requestSuccess, requestError } = phonesSlice.actions;
    dispatch(requestStart());
    try {
      const { data } = await axios.get('phones.json');
      dispatch(requestSuccess(data));
    } catch (e) {
      dispatch(requestError(e));
    }
  }
}

export default phonesSlice.reducer;