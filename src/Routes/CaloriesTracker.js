import React from 'react';
import Search from './Components/Search';
import axios from 'axios';

function CaloriesTracker() {

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
        <Search onClick={clickHandler}/>
        );
        
}

export default CaloriesTracker;