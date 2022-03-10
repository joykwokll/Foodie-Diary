import React, { useState, useEffect } from "react";
import Search from "../Components/Search";
import Result from "../Components/Result";
import axios from "axios";
import "./CaloriesTracker.css";

function CaloriesTracker() {
  const [food, setFood] = useState([]);
  const [keyword, setKeyword] = useState("");
  const [totalCalories, setTotalCalories] = useState(0);
  const [totalSugar, setTotalSugar] = useState(0);
  const [totalSodium, setTotalSodium] = useState(0);
  const [totalProtein, setTotalProtein] = useState(0);
  const [totalCarbohydrates, setTotalCarbohydrates] = useState(0);
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
            {
              name: keyword,
              calories: response.data.items[0].calories,
              serving_size_g: response.data.items[0].serving_size_g,
              sugar_g: response.data.items[0].sugar_g,
              sodium_mg: response.data.items[0].sodium_mg,
              protein_g: response.data.items[0].protein_g,
              carbohydrates_total_g: response.data.items[0].carbohydrates_total_g,
            },
          ]);
          setTotalCalories(
            Math.ceil(totalCalories) + response.data.items[0].calories
          );
          setTotalSugar(
            Math.ceil(totalSugar) + response.data.items[0].sugar_g
          );
          setTotalSodium(
            Math.ceil(totalSodium) + response.data.items[0].sodium_mg
          )
          setTotalProtein(
            Math.ceil(totalProtein) + response.data.items[0].protein_g
          )
          setTotalCarbohydrates(
            Math.ceil(totalCarbohydrates) + response.data.items[0].carbohydrates_total_g
          )
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
    setTotalCalories(Math.ceil(totalCalories) - Math.ceil(removedFood[0].calories));
    setTotalSugar(Math.ceil(totalSugar) - Math.ceil(removedFood[0].sugar_g));
    setTotalSodium(Math.ceil(totalSodium) - Math.ceil(removedFood[0].sodium_mg));
    setTotalProtein(Math.ceil(totalProtein) - Math.ceil(removedFood[0].protein_g));
    setTotalCarbohydrates(Math.ceil(totalCarbohydrates) - Math.ceil(removedFood[0].carbohydrates_total_g));

    
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

  const removedFood = food.map((index) => {
    return <Result onRemove={() => removeFood(index)} />;
  })


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
          placeholder={"What did you eat today?"}
        />

        <table className="caloriesTable">
          <thead>
            <tr>
              <th>Food Name</th>  
              <th>Calories (kcal) </th>
              <th>Serving Size (g) </th>
              <th>Sugar (g)</th>
              <th>Sodium (mg)</th>
              <th>Protein (g)</th>
              <th>Carbohydrates (g)</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {food.map((x) => (
              <tr>
                <td>{x.name}</td>
                <td>{x.calories}</td>
                <td>{x.serving_size_g}</td>
                <td>{x.sugar_g}</td>
                <td>{x.sodium_mg}</td>
                <td>{x.protein_g}</td>
                <td>{x.carbohydrates_total_g}</td>
                <td><button className="removeButton" onClick={() => removeFood(x)}>Remove</button></td>
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

        <h3>Total</h3>
        <table className="caloriesTable">
          <thead>
            <tr>
              <th>Calories (kcal) </th>
              <th>Sugar (g)</th>
              <th>Sodium (mg)</th>
              <th>Protein (g)</th>
              <th>Carbohydrates (g)</th>
            </tr>
          </thead>
          <tbody>
              <tr>
                <td>{totalCalories}kcal</td>
                <td>{totalSugar}g</td>
                <td>{totalSodium}mg</td>
                <td>{totalProtein}g</td>
                <td>{totalCarbohydrates}g</td>
              </tr>
          </tbody>
        </table>

      
        {/* <p>Total Calories: {totalCalories}kcal </p> 
        <p>Total Sugar: {totalSugar}g </p> 
        <p>Total Sodium: {totalSodium}mg </p> 
        <p>Total Protein: {totalProtein}g </p> 
        <p>Total Carbohydrates: {totalCarbohydrates}g </p>  */}


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
