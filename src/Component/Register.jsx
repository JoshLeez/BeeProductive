import React from 'react'
import "./Register.css"
import clock from '../image/clock.png'
import {Link} from 'react-router-dom'
import dashicon from '../image/dash-icon.png'
function Register() {
  return (
<div className="register-container">
      <img src={clock} alt="clock" className="clock-img"/>
       <div className='register-title'>
        <div className="register-titles">
        <h3 className="">Register</h3> 
        <Link to="/"><img src={dashicon} alt="dash-icon"/></Link>
        </div>
        <form className='login-form'>
          <strong>Email</strong>
          <input/>
          <strong>Password</strong>
          <input/>
           <strong>Email</strong>
          <input/>
          <strong>Password</strong>
          <input/>
          <div className="submit-register">
            <Link to="/" className="register-button" >Register</Link>
          </div>
        </form>
        </div>  
    </div>
  )
}

export default Register