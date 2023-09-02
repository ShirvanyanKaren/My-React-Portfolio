import "../style/Portfolio.scss";
import WealthWise from "../images/wealthwise.gif";
import VacationDestination from "../images/vacationdest.gif";
import Projects from "../components/Projects";
import Jate from "../images/J.A.T.E.gif";
import TechBlog from "../images/techblog.gif";
import NoteTaker from "../images/notetakerapp.gif";
import WeatherApp from "../images/weatherapp.gif";
import AnimatedLetters from "../components/AnimatedLetters";
import { useState } from "react";

const myProjects = [
  {    
    img: WealthWise,
    url: "https://wealthwise-project2-1bf71934d0b7.herokuapp.com/",
    repository: "https://github.com/MeanBean87/WealthWise/",
    title: "WealthWise Budgeting App",
  },
  {
    img: VacationDestination,
    url: "https://wealthwise-project2-1bf71934d0b7.herokuapp.com/",
    repository: "https://github.com/MeanBean87/WealthWise/",
    title: "VacationDestination ",
  },
  {
    img: Jate,
    url: "https://wealthwise-project2-1bf71934d0b7.herokuapp.com/",
    repository: "https://github.com/MeanBean87/WealthWise/",
    title: "J.A.T.E. PWA",
  },
  {
    img: TechBlog,
    url: "https://wealthwise-project2-1bf71934d0b7.herokuapp.com/",
    repository: "https://github.com/MeanBean87/WealthWise/",
    title: "Fullstack Tech Blog",
  },
  {
    img: NoteTaker,
    url: "https://wealthwise-project2-1bf71934d0b7.herokuapp.com/",
    repository: "https://github.com/MeanBean87/WealthWise/",
    title: "Note Taker App",
  },
  {
    img: WeatherApp,
    url: "https://wealthwise-project2-1bf71934d0b7.herokuapp.com/",
    repository: "https://github.com/MeanBean87/WealthWise/",
    title: "Weather API App",
  },
];

const Portfolio = () => {
    const [letterClass] = useState('text-animate')
  return (
    <>
    <div className="heading">
    <h1 className="text-animate-h">
      <AnimatedLetters
        className="text-animate-h"
        letterClass={letterClass}
        strArray={["P", "o", "r", "t", "f", "o", "l", " i", "o"]}
        idx={15}
      />
    </h1>
  </div>
    <div className="portfolio">

      {myProjects.map((project, index) => (
        <Projects key={index} project={project} />
      ))}
    </div>
    </>
  );
};

export default Portfolio;
