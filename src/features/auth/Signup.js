import React from "react";
import { Select, Input, Button, Card } from "antd";
import "antd/dist/antd.css";
import "../../App.css"

const Signup = props => {
  return (
    <Card title="Signup">
    <Input placeholder="Enter name"/>
      <Input placeholder="Enter email"/>
      <Input.Password placeholder="Enter password"/>
      <Select style={{width:'120px'}}>
          <Select.Option value="seller">Seller</Select.Option>
          <Select.Option value="buyer">Buyer</Select.Option>
      </Select>
      <div className="form-footer">
        <div><Button>Submit</Button></div>
        <div onClick={e => props.signUp(false) }> Existing user</div>
      </div>
    </Card>
  );
};

export default Signup;
