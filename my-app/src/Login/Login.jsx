import React from 'react';
import './Login.css';

function Login() {


  return (
    <div className="Layout">
      <img src="cart.jpg" alt="cart image"/>
      <div className="container">
        <h1 id='wetto'>WETTO SHOP</h1>
        <h1 id="welcome">Hi, Welcome Back! 👋</h1>
        <div id="loginBox">
          <label htmlFor="email" id="e-label">
            Email
          </label><br/>
          <input
            type="email"
            name="user-email"
            placeholder="example@gmail.com"
            id="input"
          /><br />
          <label htmlFor="password" id="p-label">
            Password
          </label><br />
          <input
            type="password"
            name="password"
            placeholder="Enter Your Password"
            id="input"
          /><br />
          <button id='l-btn'>Login</button>
        </div>
        <p id='account'>
          Don't have an account? <span id='signUp'>Sign Up</span>
        </p>
      </div>
    </div>
  );
}

export default Login;