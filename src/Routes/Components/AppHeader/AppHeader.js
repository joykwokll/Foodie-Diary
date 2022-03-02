import React from 'react'
import { Outlet, Link } from 'react-router-dom';
import './AppHeader.css';

const AppHeader = () => {
    return (
        <div>
            <div>
                <div className="Links">
                    <Link to="/">Home</Link> | {" "}
                    <Link to="/Calories_Tracker" >Calories Tracker</Link> | {" "}
                    <Link to="/Recipes">Recipes</Link> | {" "}
                    <Link to="/Forum">Forum</Link>
                </div>
                <div className="Login">
                    <Link to="/Login">Login</Link> | {" "}
                    <Link to="/Register">Register</Link>
                </div>
            </div>
            <div className="bg">
                <Outlet />
            </div>
        </div>
    )
};


export default AppHeader;