import React from 'react'
import './Sidebar.css'
import {Link} from 'react-router-dom'

function Sidebar() {
  return (
      <>
      <nav className="sidebar">
       <Link to="/profile">Profile</Link>
      <Link to="/dashboard">DashBoard</Link>
      <Link to="/dashboard">DashBoard</Link>
      </nav>
      </>
   
  )
}

export default Sidebar