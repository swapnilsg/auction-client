import React, {useState, useEffect} from "react";
import {useDispatch, useSelector} from 'react-redux';
import {Input, Button, Card, message } from "antd";
import {getSellerAuctions} from '../auctionSlice';
import "antd/dist/antd.css";
import "../../App.css"


const Seller = props => {
    const dispatch = useDispatch();
    const user = useSelector(state => state.user);
    const auctions = useSelector(state => state.auction);

    useEffect(() => {
        dispatch(getSellerAuctions(user._id));
    }, []);
    
  return (
    <Card title="Seller">
      I am a seller
    </Card>
  );
};

export default Seller;
