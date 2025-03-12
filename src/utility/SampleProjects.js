import GoogleBooks1 from  "./image/GoogleBooks1.jpg";
import EmpDirectory from  "./image/EmpDirectory.jpg";
import FriendNightIn from  "./image/FriendNightIn.jpg";
import Pantry from  "./image/Pantry.jpg";
import WeatherDash from  "./image/WeatherDash.jpg";
import WorkoutTracker from  "./image/WorkoutTracker.jpg";
import Bookmark from  "./image/Bookmark.jpg";
import DayScheduler from  "./image/DayScheduler.jpg";



let SampleProjects = [

  {
    title: "Google-Books-Search",
    description: " A React-based Google Books Search app. It utilizes React components, helper/util function and React lifecycle methods to query and display books based on user searches. It also utilizes Node, Express and MongoDB so that users can save books to review or purchase later.",
    githubLink: "https://github.com/Babakbigdeli/Google-Books-Search",
    deployedLink: "https://babakgbooksearch.herokuapp.com/search/",
    image: GoogleBooks1
  },
  {
    title: "Employee-Directory-React",
    description: " An application that helps employers to see non sensitive information of the employees in form of a directory. Javascript, REACT, CSS, HTML, NodeJs was used in making this appliction",
    githubLink: "https://github.com/Babakbigdeli/Employee-Directory-React",
    deployedLink: "https://babakbigdeli.github.io/Employee-Directory-React/",
    image: EmpDirectory
  },
  {
    title: "Friends-night-in",
    description: " A web application that helps user to choose the perfect food and movie combination. Javascript, HTML, CSS, API calls, Bulma, Jquery was used to make this application",
    githubLink: "https://github.com/Babakbigdeli/friends-night-in",
    deployedLink: "https://babakbigdeli.github.io/friends-night-in/",
    image: FriendNightIn
  },
  {
    title: "The-Pantry",
    description: " An app to help keep track of food in your kitchen and track waste. Javascript, HTML, CSS, Heroku, Handlebars, MySQL, Sequelize, Express, Node and MVC Paradigm was used to build this application.",
    githubLink: "https://github.com/Babakbigdeli/Project-2-The-Pantry",
    deployedLink: "https://thepantryproject-1e1d24a12cb0.herokuapp.com/",
    image: Pantry
  },
  {
    title: "Weather-Dashboard",
    description: "This applicaiton is a weather dashboard with search functionality to find current weather conditions and the future weather outlook for multiple cities. This application utilizes the AJAX to hook into OpenWeather API to retrieve data in JSON format. Javascript, HTML, CSS, Jquery was used to build this application.",
    githubLink: "https://github.com/Babakbigdeli/Weather-Dashboard",
    deployedLink: "https://babakbigdeli.github.io/Weather-Dashboard/",
    image: WeatherDash
  },
  {
    title: "Workout-Tracker",
    description: "A web based application with a Mongodb database that helps the user to keep track of their daily workout (both Cardio and Resistance) and rshows it on a chart. Javascript, HTML, CSS, Mongodb, Mongoose, Heroku, Express and NodeJs was used to make this application.",
    githubLink: "https://github.com/Babakbigdeli/Workout-Tracker",
    deployedLink: "https://thawing-everglades-97729.herokuapp.com",
    image: WorkoutTracker
  },
  {
    title: "Book-Mark",
    description: "BookMark is an app that utilizes a React frontend, a NodeJs and Express backend and a mongoDB database. It uses Auth0 for authentication and GoogleBooks and Guardian API calls. Users can manage their readings by saving the titles in the database and then moving it between different categories as they progress in reading it.",
    githubLink: "https://github.com/Babakbigdeli/BookmarkApp",
    deployedLink: "https://digital-bookmark.herokuapp.com/",
    image: Bookmark
  },
  {
    title: "Day-Planner",
    description: "A simple browser based work scheduler app where users can shcedule their daily tasks from 9am to 5pm. It utilizes local storage to save users notes and color-codes each line based on waht time of the day it is into past, present and future. ",
    githubLink: "https://github.com/Babakbigdeli/Day-Planner",
    deployedLink: "https://babakbigdeli.github.io/Day-Planner/",
    image: DayScheduler
  }
];

export default SampleProjects;