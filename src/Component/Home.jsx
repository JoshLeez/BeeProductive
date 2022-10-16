import React from "react";
import Dashboard from "./Dashboard";
import {Routes, Route} from 'react-router-dom'
import './Home.css'

import Profile from "./Profile";

function Home() {
  return (
   
      <Routes>
          <Route  index  element={<Dashboard/>}/>
          <Route path="/profile" element={<Profile/>}/>
        </Routes>

  );
}

export default Home;
