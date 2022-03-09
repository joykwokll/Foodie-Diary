import { useState } from "react";
import React from "react";
import "./Recipes.css";
import axios from "axios";
import Search from "../Components/Search";
import RecipeResult from "./RecipeResult";

function Recipes() {
  const [keyword, setKeyword] = useState("");
  const [results, setResults] = useState([]);

  const callApi = () => {
      axios
        .get(`https://api.spoonacular.com/recipes/complexSearch?query=${keyword}&apiKey=e905888b74ab41bb88de105721948ff1`, {
        })
        .then(function (response) {
            setResults([
                {   
                    name: keyword,
                    image: response.data.results[0].image,
                  },
            ]);
            console.log(response.data.results[0].image);
          // handle success
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        });
    };


  const clickHandler = () => {
    callApi();
  };

  const changeHandler = (e) => {
    setKeyword(e.target.value);
    console.log(e.target.value);
  };

  const onKeyDownHandler = (e) => {
    if (e.key === "Enter") {
      callApi();
      setKeyword(" ");
    }
  };

  return (
    <div>
      <div className="Recipesbg"></div>
      <div className="Recipes">
        <h1>Easy and tasty recipes~</h1>
        <h2>
          Popular and easy recipes can be found here too!
          <br /> Start eating healthy with us today~
        </h2>
      </div>

      <Search className="searchRecipe"
        keyword={keyword}
        onChange={changeHandler}
        onClick={clickHandler}
        onKeyDown={onKeyDownHandler}
        placeholder={"What are you craving for?"}
      />

      {/* {results.map((result) => {
          return <RecipeResult />
      })}

      <RecipeResult/> */}

{/* {
        results.map((data, index) => {
          return (
            <RecipeResult results={data}/>
          )
        })
      }
 */}



    </div>
  );
}

export default Recipes;
