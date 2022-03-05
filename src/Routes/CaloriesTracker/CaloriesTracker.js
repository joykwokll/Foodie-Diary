import React, { useState, useEffect } from "react";
import Search from "../Components/Search";
import Result from "../Components/Result";
import axios from "axios";
import "./CaloriesTracker.css";

function CaloriesTracker() {
  const [food, setFood] = useState([]);
  const [keyword, setKeyword] = useState(" ");
  const [totalCalories, setTotalCalories] = useState(0);
  const [error, setError] = useState(false);

  useEffect(() => {
    console.log(food);
  }, [food]);

  const callApi = () => {
    axios
      .get(`https://api.calorieninjas.com/v1/nutrition?query=${keyword}`, {
        headers: { "X-Api-key": "KGzjcXBdiMCn4WkwQhNjEQ==Z7CtmY77tn1sbJTg" },
      })
      .then(function (response) {
        // handle success
        if (response.data.items.length > 0) {
          setError(false);
          setFood([
            ...food,
            { name: keyword, calories: response.data.items[0].calories },
          ]);
          setTotalCalories(
            Math.ceil(totalCalories) + response.data.items[0].calories
          );
          // console.log(response.data.items[0].calories);
          console.log(response.data.items[0]);
        } else {
          setError(true);
        }
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  };

  const removeFood = (index) => {
    const foodCopy = [...food];
    const removedFood = foodCopy.splice(index, 1);
    setFood(foodCopy);
    console.log(removedFood, "removed");
    setTotalCalories(totalCalories - removedFood[0].calories);
    // console.log(index)
  };

  const clickHandler = () => {
    callApi();
  };

  const changeHandler = (e) => {
    setKeyword(e.target.value);
    // console.log(e.target.value);
  };

  const onKeyDownHandler = (e) => {
    if (e.key === "Enter") {
      callApi();
      setKeyword(" ");
    }
  };

  return (
    <div>
      <div className="Caloriesbg"> </div>
      <div className="Calories">
        <h1>
          Count your calories count per meal.
          <br /> Keep track of your daily intake!
        </h1>

        <Search
          keyword={keyword}
          onChange={changeHandler}
          onClick={clickHandler}
          onKeyDown={onKeyDownHandler}
        />

        {food.map((data, index) => {
          return <Result food={data} onRemove={() => removeFood(index)} />;
        })}
  

        <table>
          <thead>
            <tr>
              <th>Food Name</th>
              <th>Calories</th>
              <th>Calories</th>
            </tr>
          </thead>
          <tbody>
            {food.map((x) => (
              <tr>
                <td>{x.name}</td>
                <td>{x.calories}</td>
              </tr>
            ))}
            {/* <tr>
              <td>{food[0]?.name}</td>
              <td>{food[0]?.calories}</td>
            </tr>
            <tr>
              <td>{food[1]?.name}</td>
              <td>{food[1]?.calories}</td>
            </tr> */}
          </tbody>
        </table>

        <p>Total Calories: {totalCalories}kcal </p>

        {error && <p>No results found</p>}
        <style>
          @import
          url('https://fonts.googleapis.com/css2?family=Acme&family=Londrina+Solid:wght@300;400&display=swap');
        </style>
      </div>
    </div>
  );
}

export default CaloriesTracker;
