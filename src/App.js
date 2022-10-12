import './App.css';
import Signin from './Component/Signin';
import Login from './Component/Login';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Signin/>
        <Routes>
          <Route exact path="/" element={<Login/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
