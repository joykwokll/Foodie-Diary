import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './Routes/Home';
import CaloriesTracker from './Routes/CaloriesTracker';
import Recipes from './Routes/Recipes';

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path = "/" element = {<App />} >
        <Route index element = {<Home />} />
        <Route path = "Calories_Tracker" element = {<CaloriesTracker />} />
        <Route path = "Recipes" element = {<Recipes />} />
      </Route>
    </Routes>
  </BrowserRouter>,
 
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
