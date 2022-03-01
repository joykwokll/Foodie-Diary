import React, { useState, useEffect } from 'react';
import Search from './Components/Search';
import Result from './Components/Result';
import axios from 'axios';


function CaloriesTracker() {

  const [food, setFood] = useState([]);
  const [keyword, setKeyword] = useState(" ");
  const [totalCalories, setTotalCalories] = useState(0);
  const [error, setError] = useState(false);



  useEffect(() => {
    console.log(food);
  }, [food]);

  const callApi = () => {

    axios.get(`https://api.calorieninjas.com/v1/nutrition?query=${keyword}`,
      { headers: { 'X-Api-key': 'KGzjcXBdiMCn4WkwQhNjEQ==Z7CtmY77tn1sbJTg' } }
    ).then(function (response) {
      // handle success
      if (response.data.items.length > 0) {
        setError(false);
        setFood([...food, { name: keyword, calories: response.data.items[0].calories }]);
        setTotalCalories(totalCalories + response.data.items[0].calories);
        // console.log(response.data.items[0].calories);
      } else {
        setError(true);
      }
    })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
  }

  const removeFood = (index) => {
    const foodCopy = [...food];
    foodCopy.splice(index, 1)
    setFood(foodCopy)
    // console.log(index)
  }

  const clickHandler = () => {
    callApi();
  }

  const changeHandler = (e) => {
    setKeyword(e.target.value)
    // console.log(e.target.value);
  }

  const onKeyDownHandler = (e) => {
    if (e.key === "Enter") {
      callApi();
    }
  }

  return (
    <div>
      <Search keyword={keyword} onChange={changeHandler} onClick={clickHandler} onKeyDown={onKeyDownHandler} />

      {food.map((data, index) => {
        return (
          <Result food={data} onRemove={() => removeFood(index)} />
        )
      })}



      <p>Total Calories: {totalCalories}kcal </p>

      {error && <p>No results found</p>}
    </div>
  );
}


export default CaloriesTracker;