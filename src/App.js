import React, { useState } from "react";
import { useSelector } from "react-redux";
import "./App.css";
import Login from "./features/auth/Login";
import Signup from "./features/auth/Signup";
import Seller from "./features/seller/Seller";
import Buyer from "./features/buyer/Buyer";

function App() {
  const [signUp, showSignup] = useState(false);
  const user = useSelector(state => state.user);
  const isLoggedin = Object.keys(user).length !== 0;
  return (
    <div className="App">
      <header className="App-header">
        <div>Wel-come to Better Ed auction system</div>
        {isLoggedin ? (
          user.role === "seller" ? (
            <Seller />
          ) : (
            <Buyer />
          )
        ) : signUp ? (
          <Signup signUp={showSignup} />
        ) : (
          <Login signUp={showSignup} />
        )}
      </header>
    </div>
  );
}

export default App;
