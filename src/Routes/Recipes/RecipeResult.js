import React from "react";
import "./RecipeResult.css";

const RecipeResult = (props) => {
    // console.log(props)
    return (
        <div className = "recipeContainer">
            <p>{props.results}</p>
            <img src={props.response.data.results[0].image}/>
            
        </div>
    )
};


export default RecipeResult;