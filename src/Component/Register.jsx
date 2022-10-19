import React from "react";
import {Link} from 'react-router-dom'
import "./Signin.css"
import bplogo from "../image/bplogo.png"

function Register() {
  return (
    <div className='signin-background'>
    <strong className='rightside-title'>Are you ready to BeeProductive?</strong>
    <div className="signin-container">
      <div className="signin-logo">
        <img src={bplogo} alt="logo" />
      </div>
      <form>
        <input placeholder="Username"></input>
        <input placeholder="Email"></input>
        <input placeholder="Password"></input>
        <input placeholder="Confirm Password"></input>
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
