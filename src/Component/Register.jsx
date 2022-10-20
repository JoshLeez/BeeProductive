import React from "react";
import {Link} from 'react-router-dom'
import "./Signin.css"
import bplogo from "../image/bplogo.png"
import emaillogo from '../image/email_logo.png'
import lockicon from '../image/codicon_lock.png'
import username from '../image/username_icon.png'

function Register() {
  return (
    <div className='signin-background'>
    <strong className='rightside-title'>Are you ready to BeeProductive?</strong>
    <div className="signin-container">
      <div className="signin-logo">
        <img src={bplogo} alt="logo" />
      </div>
      <form>
        <div className="input-field" >
          <img src={username} alt="username-icon"/>
          <input type="text" placeholder="Username"/>
        </div>
        <div className="input-field" >
          <img src={emaillogo} alt="email-logo" />
          <input type="email" placeholder="Email"/>
        </div>
        <div className="input-field" >
          <img src={lockicon} alt="password-icon"/>
          <input type="password" placeholder="Password"/>
        </div>
        <div className="input-field">
          <img src={lockicon} alt="password-icon"/>
          <input type="password" placeholder="Confirm Password"/>
        </div>
      </form>
      <Link to="/" className="signin-button">
        Create your account
      </Link>
      <strong className="register-text">
        Already have an account? <Link to="/">Log in</Link>
      </strong>
    </div>
    </div>
  );
}

export default Register;
