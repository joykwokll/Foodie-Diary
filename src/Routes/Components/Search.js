import React from "react";

function Search(props) {
    return (
      <div>
      <input placeholder="What did you eat today?" value={props.keyword} onChange={props.onChange} onKeyDown={props.onKeyDown}/>
      <button onClick={props.onClick}>
            Submit
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