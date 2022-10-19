import React from 'react'
import bplogo from '../image/bplogo.png'
import './Sidebarbin.css'
import {Link} from 'react-router-dom'

function Sidebarbin() {
  return (
    <div className="navigation">
    <ul>
        <li>
            <div className="logo">
                <img src={bplogo} alt="logo"/>
            </div>
        </li>
        <div className="navlist">
        <li className="list">
                <b></b>
                <b></b>
                <Link to="/profile">
                    <span className="icon"><iconify-icon icon="healthicons:ui-user-profile"></iconify-icon></span>
                    <span className="title">Profile</span>
                </Link>
            </li>
            <li className="list">
                <b></b>
                <b></b>
                <Link to="/dashboard">
                    <span className="icon"><iconify-icon icon="radix-icons:dashboard"></iconify-icon></span>
                    <span className="title">Dasboard</span>
                </Link>
            </li>
            <li className="list">
                <b></b>
                <b></b>
                <Link to="/todo">
                    <span className="icon"><iconify-icon icon="bx:task"></iconify-icon></span>
                    <span className="title">To do</span>
                    </Link>
            </li>
            <li className="list">
                <b></b>
                <b></b>
                <Link to="/dashboard">
                    <span className="icon"><iconify-icon icon="bi:clock-history"></iconify-icon></span>
                    <span className="title">Dailies</span>
                </Link>
            </li>
            <li className="list">
                <b></b>
                <b></b>
                <Link to="/dashboard">
                    <span className="icon"><iconify-icon icon="bi:bar-chart"></iconify-icon></span>
                    <span className="title">Habits</span>
              </Link>
            </li>
            <li className="list">
                <b></b>
                <b></b>
                <Link to="/dashboard">
                    <span className="icon"><iconify-icon icon="gg:notes"/></span>
                    <span className="title">Notes</span>
                </Link>
            </li>
        </div>
    </ul>

    </div>
  )
}

export default Sidebarbin