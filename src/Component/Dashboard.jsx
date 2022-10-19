import React from 'react'
import './Dashboard.css'
import accounticon from '../image/account_icon.png'
import searchicon from '../image/ep_search.png'
import profilepicture from '../image/profile_picture.png'
import healthicon from '../image/health.png'
import expicon from '../image/exp_icon.png'
import dashright from '../image/dashicon_right.png'
import editicon from '../image/edit-icon.png'
import todobackground from '../image/todo_background.png'
import plusicon from '../image/plus_icon.png'

function Dashboard() {
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
   <div className="dashboard-details">
    <div className='left-page'>
      <div className='recent-list'>
          <h3>Recent</h3>
          <div className='recent-container'>
        <div className='recent-box'>
          <div className='recent-box-title'>
          <strong>To Do</strong>
          <span>Board | Tugas Kuliah</span>
          <span>DD/MM/YYYY</span>
          </div> 
          <div className='arrow-recent'>
          <img src={dashright} alt="dashright-icon"/>
          </div>
        </div>
        <div className='recent-box'>
          <div className='recent-box-title'>
          <strong>Habit</strong>
          <span>Workout</span>
          <span>DD/MM/YYYY</span>
          </div> 
          <div className='arrow-recent'>
          <img src={dashright} alt="dashright-icon"/>
          </div>
        </div>
        <div className='recent-box'>
          <div className='recent-box-title'>
          <strong>Notes</strong>
          <span>Catatan UI/UX</span>
          <span>DD/MM/YYYY</span>
          </div> 
          <div className='arrow-recent'>
          <img src={dashright} alt="dashright-icon"/>
          </div>
        </div>
        </div>
      </div>
  <div className="todo-list">
    <div className='title-icon'>
      <h3>To Do</h3>
      <img src={editicon} alt="edit-icon"/>
    </div>
    <div className="todo-items">
      <div className='todo-bg'>
        <img src={todobackground} alt="todo-background"/>
        <span>Tugas Kuliah</span>
        </div>
        <div className='todo-empty'>
        <img src={plusicon} alt="plus-icon"/>
        </div>
    </div>
  </div>
  <div className='bottom-page'>
    <div className="dallies-list">
        <div className='title-icon'>
          <h3>Dallies</h3>
          <img src={editicon} alt="edit-icon"/>
        </div>
        <div className='dallies-items'>
          <div className='dallies-add'>
            <div className='sort-box'>
            <strong>Sort by</strong>
            </div>
            <div className="dallies-btn">
                 <img src={plusicon} alt="plus-icon"/>
              <strong>Add a Daily</strong> 
            </div>
          </div>
          <div className="all-dallies">
          <div className="dallies-check">
            <input type="checkbox" className='dallies-checkbox'/>
            <span>Membaca Buku</span>
          </div> 
           <div className="dallies-check">
            <input type="checkbox" className='dallies-checkbox'/>
            <span>Mencuci Piring</span>
          </div>
          </div>
        </div>
    </div>
      <div className='habits-list'>
      <div className='title-icon'>
          <h3>Habits</h3>
          <img src={editicon} alt="edit-icon"/>
        </div>
        <div className='habits-items'>
            <div className='add-habits'>
              <img src={plusicon} alt="plus-icon"/>
              <strong>Add a habit</strong>
            </div>
            <div className='all-habits'>
              <div className="habits-check">
              <span>Membaca Buku</span>
              <img src={dashright} alt="dashright-icon"/>
             </div>
            <div className="habits-check">
              <span>Membaca Buku</span>
              <img src={dashright} alt="dashright-icon"/>
            </div>
          </div> 
        </div>
      </div>
  </div>
   </div>
   <div className="notes-details">
   <div className='title-icon'>
          <h3>Notes</h3>
          <img src={editicon} alt="edit-icon"/>
        </div>
        <div className='notes-items'>
        <div className="notes-list">
              <span>Catatan UI/UX</span>
              <img src={dashright} alt="dashright-icon"/>
            </div>
            <div className="notes-list">
              <span>Bahasa Jepang</span>
              <img src={dashright} alt="dashright-icon"/>
            </div>
        </div>
   </div>
 </div>
</div>
  )
}

export default Dashboard