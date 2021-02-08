import { createSlice } from "@reduxjs/toolkit";
import { message } from "antd";
import axios from "axios";
const URL = "http://localhost:9000";

export const auctionSlice = createSlice({
  name: "auction",
  initialState: [],
  reducers: {
    setAuction: (state, action) => {
      // state.push(...action.payload);
      state = action.payload
    }
  }
});

export const getSellerAuctions = sellerId => dispatch => {
  axios
    .get(`${URL}/auction/${sellerId}`)
    .then(res => {
     //  message.info(res.data.message);
      dispatch(setAuction(res.data.auctions));
    })
    .catch(err => {
      console.log("error while logging", err);
    });
};

export const { setAuction } = auctionSlice.actions;

export default auctionSlice.reducer;
