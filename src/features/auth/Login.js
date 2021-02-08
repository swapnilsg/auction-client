import React, {useState} from "react";
import {useDispatch} from 'react-redux';
import {Input, Button, Card, message } from "antd";
import "antd/dist/antd.css";
import "../../App.css"
import {loginUser} from './userSlice';

const Login = props => {
    const dispatch = useDispatch();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    function login() {
        if (username !== '' && password !== '') {
            dispatch(loginUser(username, password));
        } else {
            message.error('please enter email and password');
        }
    }
  return (
    <Card title="Login">
      <Input placeholder="Enter email" value={username} onChange={e => setUsername(e.target.value)}/>
      <Input.Password placeholder="Enter password" value={password} onChange={e => setPassword(e.target.value)}/>
      <div className="form-footer">
        <div><Button onClick={login}>Submit</Button></div>
        <div onClick={e => props.signUp(true) }> New user</div>
      </div>
    </Card>
  );
};

export default Login;
