import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import userReducer from '../features/auth/userSlice';
import auctionSlice from '../features/auctionSlice';
 
export default configureStore({
  reducer: {
    counter: counterReducer,
    user: userReducer,
    auction: auctionSlice
  },
});
