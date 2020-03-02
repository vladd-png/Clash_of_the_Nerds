# Clash of the Nerds

Need to study for that upcoming test? Is it geography, mathematics, or general knowledge? Want to play games instead? Well now you can do both. This app serves as a study tool for students who would rather play a game than study for that big upcoming test. With the ability to search for specific test data, and level of difficulty this app is sure to do it all. Students can also save their trivia test questions for later review. 

### Introduction

This was the final solo project in the third Module at Turing school. We were tasked with choosing our own API from a list of over 200 free and public sources, come up with an app purpose, and a target audience. This application serves to teach students who need to study for a specific test, in a game like setting. I was given five days to build the app from a `react-app` boilerplate. A major learning goal for this project was to set up the application with components connected to the Redux global store, complete with multiple uses of mapStateToProps and mapDispatchToProps.<br />
[Link to wireframe](https://balsamiq.cloud/svd6gho/pl1x5h9/rDBB0)

### Screenshots
![screenshot 1](https://user-images.githubusercontent.com/53594458/75725565-f5b32280-5c9d-11ea-8057-b8f4f69ac7c1.png)
![screenshot 2](https://user-images.githubusercontent.com/53594458/75725593-06fc2f00-5c9e-11ea-9f11-6e6a3a6dc571.png)
![screenshot 3](https://user-images.githubusercontent.com/53594458/75725652-25fac100-5c9e-11ea-9160-9ace03e90290.png)

### Directions for Use
- On page load you will see a login screen requiring the user to input their name, and select their battle which inclues both a subject and a level of difficulty.
- After selecting the `Ready to Rumble` button, the user is directed to the testing page, where a series of 10 questions are displayed with their optional answers. 
- The user can then select one of the answer buttons to see the next question, until the last when the user will reach the results page. 
- The results page displays users test stats, including: how many questions were missed, the percent they got right, and all the questions sorted into correct and incorrect columns. 
- Each result card allows the user to save that trivia question to their account page for further review. 
- On the account page the user can see all the cards they have saved, along with the answer they chose compared to the correct answer. 
- At any point a user can log out from the nav bar, which erases the users state in the global store. 

### Project Learning Goals  
1. Write squeaky clean, well refactored code using ES6 syntax.
2. Make informed design decisions to create a user-friendly application.
3. Keep state based components to a minimum and leverage more functional components.
4. Use a modular architecture for your application file structure.
5. Think deeply about React Lifecycle Methods.
6. Become familiar with promises, nested fetch requests, and handling the UI based on acceptance of data.
7. Become familiar with routing and how to handle dynamic routes.
8. Use propTypes for every component receiving props.
9. Write tests for React components and some asynchronous functionality.
10. Implement a well developed app for your specific target audience. 
11. Gain confidience using the rediux global store with React.

### Technologies Used
- HTML
- CSS & SASS
- React / Router / Redux
- Jest/Enzyme
- NPM
- Fetch

### How to run on a local machine
1. shut down any live servers you currently have running (`control` + `c`)
2. clone down this repo to desired location
3. cd to the directory where you cloned the repo
4. run `npm install`
8. cd into the directory and run `npm start`
10. you should now be able to use the Clash of the Nerds testing application.

### `npm test`

Launches the test runner in the interactive watch mode.<br />


