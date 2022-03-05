import React from "react";
import { findDOMNode } from "react-dom";

const Result = (props) => {
    // console.log(props)
    return (
        <div>
            <p>{props.food.name}</p>
            <p>{props.food.calories}kcal</p>
            <button onClick={props.onRemove}>
                Remove
            </button>
        </div>
    )
};


export default Result