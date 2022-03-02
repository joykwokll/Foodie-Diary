import './App.css';
import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import Result from './Routes/Components/Result';

function App() {

  // const [form, setForm] = useState([" "]);




  return (
    <div style={{ backgroundImage: "url(/images/foodimage.jpeg)" }}>
      <div className="App">
        <div className="Links">
          <Link to="/">Home</Link> | {" "}
          <Link to="/Calories_Tracker" >Calories Tracker</Link> | {" "}
          <Link to="/Recipes">Recipes</Link> | {" "}
          <Link to="/Forum">Forum</Link>
        </div>
        <div className="Login">
          <Link to="/Login">Login</Link> | {" "}
          <Link to="/Register">Register</Link>
        </div>
      </div>
      <div className="bg">
        <Outlet />
      </div>
    </div>

  );
}

export default App;
