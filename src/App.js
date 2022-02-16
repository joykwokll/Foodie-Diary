import './App.css';
import {Link} from 'react-router-dom';
import Search from './Components/Search';
import Submit from './Components/Submit';
import Result from './Components/Result';

function App() {
  return (
    <div className="App">
      <Link to="/">Home</Link> | {" "}
      <Link to="/Calories_Tracker">Calories Tracker</Link> | {" "}
      <Link to="/Recipes">Recipes</Link>
      <h1>Foodie Diary</h1>
    
    </div>
  );
}

export default App;
