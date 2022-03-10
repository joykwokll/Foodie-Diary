import React from "react";
import "./RecipeResult.css";

const RecipeResult = (props) => {
    console.log(props)
    return (
        <div clssName = "pinkBG">
        <div className = "recipeContainer">
            <p className="foodTitle">{props.results.title}</p>
            <img src={props.results.image}/>
            
        </div>
        </div>
        
    )
};


export default RecipeResult;