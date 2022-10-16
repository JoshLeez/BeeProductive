import React from 'react'
import {Outlet} from 'react-router-dom'
import Sidebar from './Sidebar'
import './Home.css'

function Sidebarlayout() {
  return (
    <div className='home'>
      <Sidebar/>
     <Outlet/>
    </div>

  )
}

export default Sidebarlayout