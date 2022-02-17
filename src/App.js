import './App.css';
import React from 'react';
import {Outlet, Link} from 'react-router-dom';
import Result from './Routes/Components/Result';

function App() {


  return (
    <div className="App">
      <Link to="/">Home</Link> | {" "}
      <Link to="/Calories_Tracker" >Calories Tracker</Link> | {" "}
      <Link to="/Recipes">Recipes</Link>
      <Outlet/>
    
    </div>
    
  );
}

export default App;
