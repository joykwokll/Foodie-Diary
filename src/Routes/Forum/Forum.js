import React from 'react';
import './Forum.css';

function Forum() {
    return (
        <div>
        <div className='Forumbg'></div>
        <div className = 'Forum'>
            <h1>You’re in good company</h1>
            <h2>The more the merrier! Read up post from your fellow foodie too, 
                <br/> you might come across some secret recipe hacks if you are lucky!</h2>
                <p>Q: How much calories can one eat in a day?</p> <br/>
                <a href="https://www.nhs.uk/common-health-questions/food-and-diet/what-should-my-daily-intake-of-calories-be/#:~:text=An%20ideal%20daily%20intake%20of,women%20and%202%2C500%20for%20men." target="_blank">
                    A: What is considered a healthy range?
                </a>
                <br/>
                <br/>
                <p>Q: How do i keep fit while counting calories?</p> <br/>
                <a href="https://www.active.com/fitness/articles/5-simple-tips-for-fitness-success" target="_blank">
                    A: Simple fitness tips at your fingertip!
                </a>
                <br/>
                <br/>
                <p>Q: I want to watch my weight. What food should I avoid?</p> <br/>
                <a href="https://www.myfooddata.com/articles/high-calorie-foods-to-avoid.php#:~:text=High%2Dcalorie%20foods%20to%20avoid,drinks%2C%20alcohol%2C%20and%20condiments." target="_blank">
                    A: Top 10 Foods Highest in Calories to Avoid for Weight Loss.
                </a>
                <br/>
                <br/>
                <p>Anymore questions? Ask away~</p> <br/>
        </div>
        </div>
    )
}

export default Forum;