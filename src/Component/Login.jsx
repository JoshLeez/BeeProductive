import React from 'react'
import "./Login.css"
import clock from '../image/clock.png'
import {Link} from 'react-router-dom'
// import "./Signin.css"
function Login() {
  return (
    <div className="login-container">
      <img src={clock} alt="clock" className="clock-img"/>
       <div className='login-title'>
        <h4>Are you ready to</h4>
        <h3>BeeProducitve <span>?</span></h3>
        <form className='login-form'>
          <strong>Email</strong>
          <input/>
          <strong>Password</strong>
          <input/>
          <div className="submit-form">
            <strong>Create an account</strong>
            <Link>Login</Link>
          </div>
        </form>
        </div>
    </div>
  )
}

export default Login