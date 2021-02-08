import { createSlice } from '@reduxjs/toolkit';
import {message} from 'antd';
import axios from 'axios';
const URL = 'http://localhost:9000'

export const userSlice = createSlice({
  name: 'user',
  initialState: {},
  reducers: {
    setUser: (state, action) => {
        state = Object.assign(state, action.payload)
    },
    removeUser: state => {
      state = {}
    },
  },
});

export const loginUser = (email, password) => dispatch => {
    axios.post(`${URL}/users/login`, {email, password}).then(res => {
        message.info(res.data.message);
        dispatch(setUser(res.data.user));
    }).catch(err => {
        console.log('error while logging', err);
    });
  };

export const { setUser, removeUser } = userSlice.actions;

export default userSlice.reducer;
