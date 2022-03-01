import React, {useState} from 'react';
import Search from './Components/Search';
import axios from 'axios';

function CaloriesTracker() {

  const [food, setFood] = useState([]);
  const [keyword, setKeyword] = useState(" ");


    const callApi = () => {
        axios.get(`https://api.calorieninjas.com/v1/nutrition?query=${keyword}`,
          {headers: {'X-Api-key': 'KGzjcXBdiMCn4WkwQhNjEQ==Z7CtmY77tn1sbJTg'}}
        ).then(function (response) {
          // handle success
          setFood([...food, {keyword: response.data.items[0].calories}]);
          // console.log(response.data.items[0].calories);
        })
        .then(function (response){
          console.log(food);
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
      }
    
      const clickHandler = () => {
        callApi();
    }

    const changeHandler = (e) => {
      setKeyword(e.target.value)
      // console.log(e.target.value);
    }

    return (
        <Search keyword={keyword} onChange={changeHandler} onClick={clickHandler}/>
        );
        
}

export default CaloriesTracker;