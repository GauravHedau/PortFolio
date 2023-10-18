import HTML from "./assest/stack/HTML.png";
import API from "./assest/stack/api.png";
import JAVA from "./assest/stack/java.png";
import MYSQL from "./assest/stack/mysql.png";
import SQL from "./assest/stack/sql.png";
import CSS from "./assest/stack/CSS.png";
import JS from "./assest/stack/Javascript.svg";
import REACT from "./assest/stack/React.png";
import GITHUB from "./assest/stack/Github.svg";
import BOOTSTRAP from "./assest/stack/Bootstrap.svg";
import GIT from "./assest/stack/Git.svg";
import EXPRESS from "./assest/stack/Express.png";
import MATERIALUI from "./assest/stack/MaterialUI.svg";
import MONGODB from "./assest/stack/MongoDB.svg";
import SASS from "./assest/stack/Saas.svg";
import NODEJS from "./assest/stack/NodeJs.svg";
import TAILWIND from "./assest/stack/Tailwind.png";
import REDUX from "./assest/stack/Redux.svg";
import INSOMNIA from "./assest/stack/insomnia.jpg";
import ShoeStore from "./assest/Projects/shoestores.png";
import SocialMonkey from "./assest/Projects/socailmonkey.png";
import Amazon from "./assest/Projects/amazon.png";
import Youtube from "./assest/Projects/youtube.png";
import GoogleKepp from "./assest/Projects/googlekeep.png";
import Weather from "./assest/Projects/weather.png";

export const projects = [
  {
    id: 1,
    title: "Social Monkey - Web Application.",
    description:
      " Social Monkey is a front-end social media application built using ReactJS, designed to provide users with a delightful social networking experience. It has the feature of authenticating and authorization of the user.",
    githubLink: "https://github.com/GauravHedau",
    liveLink: "https://social-monkey-gaurav.netlify.app/",
    TechUsed: [REACT, TAILWIND, CSS, NODEJS, MYSQL, INSOMNIA],
    image: SocialMonkey,
  },
  {
    id: 2,
    title: "Shoes Store App with razorpay payment integration.",
    description:
      " It is a shoe website that fetches the data from API and maps to the main page with dynamic wishlist and cart options. Razorpay payment is integrated into this application which securely accepts all types online payment .",
    githubLink: "https://github.com/GauravHedau",
    liveLink: "https://shoes-storeapp-gaurav.netlify.app/",

    TechUsed: [REACT, TAILWIND, JS, MATERIALUI],

    image: ShoeStore,
  },
  {
    id: 3,
    title: "Amazon Clone Using Html and Css",
    description:
      " The Amazon clone project involves building a simplified version of Amazon's e-commerce website.  it will serve as a front-end prototype, mimicking the look and feel of Amazon's product pages. This project is an excellent way to learn and practice HTML and CSS and gain insights into responsive web design.",
    githubLink: "https://github.com/GauravHedau",
    liveLink: "https://amazon-clone-usinghtmlcss.netlify.app/",
    TechUsed: [HTML, CSS],

    image: Amazon,
  },
  {
    id: 4,
    title: "Chrome Extension - Weather App.",
    description:
      " It fetches the live location with the help of openweather API and displays it to the user. Also, It shows the weather according to the input value of the city name from the whole world",
    githubLink: "https://github.com/GauravHedau",
    liveLink: "https://weather-app-gaurav.netlify.app/",
    TechUsed: [HTML, JS, CSS, MATERIALUI, API],
    image: Weather,
  },
  {
    id: 5,
    title: "Google Keep",
    description:
      " The Google Keep clone project aims to build a simplified version of Google Keep, a note-taking application. This project will allow you to create, edit, delete, and organize notes, all while saving them in the browser's local storage. You will utilize React for the user interface and interactivity, HTML for structuring the components, CSS for styling, and JavaScript for handling user actions and local storage management.",
    githubLink: "https://github.com/GauravHedau",
    liveLink: "https://gauravgooglekeep.netlify.app/",
    TechUsed: [REACT, CSS, JS, MATERIALUI],
    image: GoogleKepp,
  },
  {
    id: 6,
    title: "YouTube Clone Using React.",
    description:
      " The YouTube clone project aims to recreate the basic functionality of YouTube. This includes the ability to search for videos, watch videos, and interact with them, all while using a REST API to fetch video data. You will utilize React for the user interface, HTML for structuring the components, Tailwind CSS for styling, JavaScript for interactivity, and a REST API to retrieve video information.",
    githubLink: "https://github.com/GauravHedau",
    liveLink: "https://gauravyoutube.netlify.app/",
    TechUsed: [REACT, TAILWIND, CSS, API],
    image: Youtube,
  },
];
export const skills = [
  {
    id: 0,
    img: HTML,
    title: "HTML",
  },
  {
    id: 1,
    img: CSS,
    title: "CSS",
  },
  {
    id: 2,
    img: REACT,
    title: "REACT",
  },
  {
    id: 3,
    img: JAVA,
    title: "JAVA",
  },
  {
    id: 4,
    img: MYSQL,
    title: "MYSQL",
  },

  {
    id: 5,
    img: SASS,
    title: "SASS",
  },
  {
    id: 6,
    img: TAILWIND,
    title: "TAILWIND",
  },
  {
    id: 7,
    img: GITHUB,
    title: "GITHUB",
  },
  {
    id: 8,
    img: JS,
    title: "JAVASCRIPT",
  },

  {
    id: 9,
    img: SQL,
    title: "SQL",
  },
  {
    id: 10,
    img: API,
    title: "API",
  },
  {
    id: 11,
    img: MONGODB,
    title: "MONGODB",
  },
  {
    id: 12,
    img: GIT,
    title: "GIT",
  },
  {
    id: 13,
    img: BOOTSTRAP,
    title: "BOOTSTRAP",
  },
  {
    id: 14,
    img: EXPRESS,
    title: "EXPRESS",
  },
  {
    id: 15,
    img: NODEJS,
    title: "NODEJS",
  },
  {
    id: 16,
    img: MATERIALUI,
    title: "MATERIALUI",
  },
  {
    id: 17,
    img: REDUX,
    title: "REDUX",
  },
];
