import React from "react";
import "./Search.css";

function Search(props) {
    return (
      <div>
      <input value={props.keyword} onChange={props.onChange} onKeyDown={props.onKeyDown} placeholder={props.placeholder}/>
      <button onClick={props.onClick}>
            Enter
        </button>
      </div>
    );
  }
  
  export default Search;
  
//   const Search = (props) => {
//     return (
//         <input placeholder="Search for your GIF" value={props.keyword} onChange={props.onChange}/>
//     )
// };