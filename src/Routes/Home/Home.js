import React from 'react';
import './Home.css'

function Home() {
    return (

        <div className='Home'>
            <h1 className='Welcome'>Welcome to your personal Foodie Diary</h1>
            <h2 className="h2first">Count your calories~</h2>
            <h2 className="h2sec">Easy and Yummy Recipes~</h2>
            <h2 className="h2third">Share and learn together~</h2>
            <button className="button">JOIN NOW!</button>
            <div className='HomeBG'>
            </div>
            <style>
                @import url('https://fonts.googleapis.com/css2?family=Acme&family=Londrina+Solid:wght@300;400&display=swap');
            </style>
        </div>
    )
}

export default Home;