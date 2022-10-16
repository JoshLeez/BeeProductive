import './App.css';
import Login from './Component/Login';
import Register from './Component/Register.jsx'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Sidebarlayout from './Component/Sidebarlayout'
import Dashboard from './Component/Dashboard';
import Profile from './Component/Profile';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route element={<Sidebarlayout/>}>
          <Route  path="/dashboard" element={<Dashboard/>}/>
          <Route  path="/profile" element={<Profile/>}/>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
