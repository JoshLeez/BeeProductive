import React from "react";
import bplogo from "../image/bplogo.png";
import "./Login.css";
import "./Signin.css";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className='signin-background'>
    <strong className='rightside-title'>Are you ready to BeeProductive?</strong>
    <div className="signin-container">
      <div className="signin-logo">
        <img src={bplogo} alt="logo" />
      </div>
      <div className="login-google">Log in with Google</div>
      <div className="login-section">
        <div className="garis"></div>
        <strong>or login with email</strong>
        <div className="garis"></div>
      </div>
      <form>
        <input type="email" placeholder="Email"></input>
        <input type="password" placeholder="Password"></input>
      </form>
      <div className="second-section">
        <input type="checkbox" />
        <label>Keep me logged in</label>
        <strong>Forgot Password</strong>
      </div>
      <Link to="/dashboard" className="signin-button">
        Log in
      </Link>
      <strong className="register-text">
        Don't have any account yet? <Link to="/register">Sign up</Link>
      </strong>
    </div>
    </div>
  );
}

export default Login;
