import './App.css';
import React from 'react';
import {Outlet, Link} from 'react-router-dom';
import Search from './Routes/Components/Search';
import Submit from './Routes/Components/Submit';
import Result from './Routes/Components/Result';
import axios from 'axios';

function App() {

  const callApi = () => {
    axios.get('https://api.calorieninjas.com/v1/nutrition?query=tomato',
      {headers: {'X-Api-key': 'KGzjcXBdiMCn4WkwQhNjEQ==Z7CtmY77tn1sbJTg'}}
    ).then(function (response) {
      // handle success
      console.log(response);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
  }

  const clickHandler = () => {
    callApi();
}




  return (
    <div className="App">
      <Link to="/">Home</Link> | {" "}
      <Link to="/Calories_Tracker" >Calories Tracker</Link> | {" "}
      <Link to="/Recipes">Recipes</Link>
      <Outlet/>
      <Search/>
      <Submit onClick={clickHandler}/>
    
    </div>
    
  );
}

export default App;
