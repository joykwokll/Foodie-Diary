# Foodie Diary 

## Introduction

Foodie Diary is a website for food lovers to keep track of their daily calories intake. They are able to Count their calories for specific food, gain access to easy and yummy recipes as well as a public forum for them to gather and learn together.

## Project Brief
**MVP - Minimum Viable Product** 
- **Build a web application using create-react-app / vite or next.js**. Must be
  your own work.
- **Use React framework** to build your application with _at least_
  - 3 components
  - 4 props
  - 2 state properties
  - 2 setState
  - 2 routes
- **Use 3rd party API and/or Firestore**
  - API call with Axios and display the data for the user. You may use any API
    of your choosing.
- **Craft a `README.md` file that explains your app** to the world.
- **Create wireframes** for your app and include it in your repo/readme.

**Stretch Goals (Not Mandatory)**
- You may also opt to use Firebase/Firestore if you need to store data.

## Tech stack


-Visual Studio Code
-HTML
-CSS
-Vanilla Javascript
-React JS
-Ajax (axios) for API
Git & GitHub
Vercel

## Wireframes

I used figma for my wireframes. 
https://www.figma.com/file/GYAUuatzNseCMqisnYLVXZ/Foodie-Diary?node-id=0%3A1

## Progress

1. Firstly, I build the base of the website first using browser router. I link all the pages and routes together. 
2. After i got my base up, I went into each route and built the page one by one. Starting from Home page. After i am done with the content in Homepage, I moved on the my main feature - calories tracker.
3. For the calories tracker, i fetch the API first. Then i create the components needed for this route. They are the search button, and the results component. 
4. I made the search bar searchable with any keywords, and displayed the results as how i want it to show, in a table. 
5. Then, I moved on to the logic for this calories tracker. I created a total calories part and sum the total calories together. 
6. Then, I put the total calories into a table as well. I created a remove button and make sure the total calories got deduced as well after every product is removed.
7. Moving on, I added more informations for the API to display. I displayed Calories (kcal)	Sugar (g)	Sodium (mg)	Protein (g)	Carbohydrates (g). 
8. After I am done with my calories part, I fetched the API for recipe part.
9. Then I updated some content in my forum.
10. Finally I did the CSS for all of the pages, tables and componets iteself.

## Future Developments

I can add login and register authentication with firebase and routing for users to create an account under their name and save their data and records for future use and references.

Reference: https://www.youtube.com/watch?v=PKwu15ldZ7k&t=413s 
React Authentication Crash Course With Firebase And Routing

## Deployment

I have deployed this project to Vercel.
https://foodie-diary.vercel.app/

## Summary

Overall, I am happy with my project 2 and I had fun building it even though I have encountered a lot of problems step by step along the way. There is definitely many more rooms for improvement and I will continue to work on it for a better portfolio.