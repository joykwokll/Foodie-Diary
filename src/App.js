import './App.css';
import React from 'react';
import {Outlet, Link} from 'react-router-dom';
import Result from './Routes/Components/Result';

function App() {

  // const [form, setForm] = useState([" "]);
  



  return (
    <div className="App">
      <Link to="/">Home</Link> | {" "}
      <Link to="/Calories_Tracker" >Calories Tracker</Link> | {" "}
      <Link to="/Recipes">Recipes</Link> | {" "}
      <Link to="/Forum">Forum</Link>
      <Outlet/>
    
    </div>
    
  );
}

export default App;
