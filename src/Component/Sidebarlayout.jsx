import React from 'react'
import {Outlet} from 'react-router-dom'
import Sidebarbin from './Sidebarbin.jsx'
import './Home.css'

function Sidebarlayout() {
  return (
    <div className='home'>
      <Sidebarbin/>
     <Outlet/>
    </div>

  )
}

export default Sidebarlayout