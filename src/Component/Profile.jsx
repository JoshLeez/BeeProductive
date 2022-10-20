import React from 'react'
import './Dashboard.css'
import accounticon from '../image/account_icon.png'
import searchicon from '../image/ep_search.png'
import profilepicture from '../image/profile_picture.png'
import healthicon from '../image/health.png'
import expicon from '../image/exp_icon.png'
import editicon from '../image/edit-icon.png'
import editinput from '../image/edit-input.png'
import saveicon from '../image/save-icon.png'
import {Link} from 'react-router-dom'
import "./Profile.css"

function Profile() {
  return (
    <div className='dashboard-page'>
    <div className='dashboard-container'>
      <div className='dashboard-top'>
        <h3>Hello Bintang !!!</h3> 
        <div className='dashboard-tr'>
          <div className='search-wrapper'>
          <img src={searchicon} alt="search"/>
          <input placeholder="Search"/>
          </div>
          <img src={accounticon} alt="account-icon"/>
        </div>
      </div>
      <div className='dashboard-profile'>
        <img className="profilepicture" src={profilepicture} alt="profile"/>
        <div className="profile-status">
          <div className="profile-name-level">
          <div>Muhammad Bintang Syawal</div>
          <div>Lv. 58</div>
          </div>
          <div className='profile-bar'>
            <div className='health-status'>
              <img src={healthicon} alt="healthicon"/>
              <div className='health-bar'></div>
               <span>0/100</span>
            </div>
            <div className='exp-status'>
              <img src={expicon} alt="healthicon"/>
              <div className='exp-bar'></div>
              <span>0/100</span>
            </div>
          </div>
        </div>
        <div className='information-container'>
          <div className='information-box'>
          <h4 className='information-title'>Information</h4>
          <div className='information-progressbar'>
              <div className='information-todo'>
                <span>To Do</span>
                <div className='information-todo-progressbar'></div>
              </div>
              <div className='information-todo'>
                <span>Habits</span>
                <div className='information-todo-progressbar'></div>
              </div>
              <div className='information-todo'>
                <span>Dallies</span>
                <div className='information-todo-progressbar'></div>
              </div>
          </div>
          </div>
        </div>
      </div>
      <div className='garis'></div>
    </div>
    <div className='profile-icon'>
      <div className='profile-title'>
      <h3>Profile</h3>
      <img src={editicon} alt="edit-icon"/>
      </div>
      <div className='garis'></div>
    </div>
      <form className='profile-edit'>
      <div className="profile-data">
      <h4>Nickname</h4>
      <div>
      <input className="profile-input" type="text"/>
      <img src={editinput} alt="edit-input-icon" className='edit-input'/>
      </div> 
      </div>
      <div className="profile-data">
      <h4>Phone Number</h4>
      <div>
      <input className="profile-input"/>
      <img src={editinput} alt="edit-input-icon" className='edit-input'/>
      </div> 
      </div>
        <div className="profile-data">
      <h4>Username</h4>
      <div>
      <input className="profile-input"/>
      <img src={editinput} alt="edit-input-icon" className='edit-input'/>
      </div> 
      </div>
      <div className="profile-data">
      <h4>Occupation</h4>
      <div>
      <input className="profile-input"/>
      <img src={editinput} alt="edit-input-icon" className='edit-input'/>
      </div> 
      </div>
      <div className="profile-data">
      <h4>Email</h4>
      <div>
      <input className="profile-input"/>
      <img src={editinput} alt="edit-input-icon" className='edit-input'/>
      </div> 
      </div>
      <div className="profile-data">
      <h4>LinkedIn Account</h4>
      <div>
      <input className="profile-input"/>
      <img src={editinput} alt="edit-input-icon" className='edit-input'/>
      </div> 
      </div>
      <div className="profile-data">
      <h4>Password</h4>
      <div>
      <input className="profile-input"/>
      <img src={editinput} alt="edit-input-icon" className='edit-input'/>
      </div> 
      </div>
      <Link to="/dashboard" className='save-btn'>
        <div className='profile-save-btn'>
          <img src={saveicon} alt="save-icon"/>
          <h3>Save Changes</h3>
        </div>
      </Link>
      </form>
    </div>
  )
}

export default Profile