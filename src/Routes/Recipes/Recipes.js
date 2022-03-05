import { useState } from "react";
import React from "react";
import "./Recipes.css";
import axios from "axios";
import Search from "../Components/Search";


function Recipes() {

    const [keyword, setKeyword] = useState("");

  // const callApi = () => {
  //     axios
  //       .get(`https://api.calorieninjas.com/v1/nutrition?query=${keyword}`, {
  //         headers: { "X-Api-key": "KGzjcXBdiMCn4WkwQhNjEQ==Z7CtmY77tn1sbJTg" },
  //       })
  //       .then(function (response) {
  //         // handle success
  //       .catch(function (error) {
  //         // handle error
  //         console.log(error);
  //       });
  //   };

  
  const callApi = () => (
    axios.get(`https://tasty.p.rapidapi.com/recipes/auto-complete`),
      { params: { prefix: "chicken soup" } },
      {
        headers: {
          "x-rapidapi-host": "tasty.p.rapidapi.com",
          "x-rapidapi-key":
            "71f6e49fd5mshd91e5d645cbefadp169eedjsn1e321adce08f",
        },
      }
        .then(function (response) {
          // handle success
          console.log(response.data.data);
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
  );

  //   const axios = require("axios").default;

  //   const callAPI = {
  //     method: "GET",
  //     url: "https://tasty.p.rapidapi.com/recipes/auto-complete",
  //     params: { prefix: "chicken soup" },
  //     headers: {
  //       "x-rapidapi-host": "tasty.p.rapidapi.com",
  //       "x-rapidapi-key": "71f6e49fd5mshd91e5d645cbefadp169eedjsn1e321adce08f",
  //     },
  //   };

  //   axios
  //     .request(options)
  //     .then(function (response) {
  //       console.log(response.data);
  //     })
  //     .catch(function (error) {
  //       console.error(error);
  //     });

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
      <Search
        keyword={keyword}
        onChange={changeHandler}
        onClick={clickHandler}
        onKeyDown={onKeyDownHandler}
      />

      <div className="Recipesbg"></div>
      <div className="Recipes">
        <h1>What do you crave today?</h1>
        <h2>
          Popular and easy recipes can be found here too!
          <br /> Start eating healthy with us today~
        </h2>
      </div>
    </div>
  );
}

export default Recipes;
