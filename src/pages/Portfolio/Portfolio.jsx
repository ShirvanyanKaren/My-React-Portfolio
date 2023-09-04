import "./Portfolio.scss";
import WealthWise from "../../images/wealthwise.gif";
import VacationDestination from "../../images/vacationdest.gif";
import Projects from "../../components/Projects/Projects";
import Jate from "../../images/J.A.T.E.gif";
import TechBlog from "../../images/techblog.gif";
import NoteTaker from "../../images/notetakerapp.gif";
import WeatherApp from "../../images/weatherapp.gif";
import AnimatedLetters from "../../components/AnimatedLetters/AnimatedLetters";
import { useState } from "react";
import Footer from "../../components/Footer/Footer";

const myProjects = [
  {    
    img: WealthWise,
    url: "https://wealthwise-project2-1bf71934d0b7.herokuapp.com/",
    repository: "https://github.com/MeanBean87/WealthWise/",
    title: "WealthWise Budgeting App",
  },
  {
    img: VacationDestination,
    url: "https://frausto98.github.io/vacationDestination",
    repository: "https://github.com/frausto98/vacationDestination",
    title: "VacationDestination ",
  },
  {
    img: Jate,
    url: "https://pwa-text-editor-shirvanyank-d70c3e71dd6c.herokuapp.com/",
    repository: "https://github.com/ShirvanyanKaren/PWA-Text-Editor",
    title: "J.A.T.E. PWA",
  },
  {
    img: TechBlog,
    url: "https://tms-blog-shirvanyank-9efca1bc849d.herokuapp.com/",
    repository: "https://github.com/ShirvanyanKaren/CMS-Tech_Blog-Site",
    title: "Fullstack Tech Blog",
  },
  {
    img: NoteTaker,
    url: "https://note-taker-app-shirvanyank-f32586d10362.herokuapp.com/",
    repository: "https://github.com/ShirvanyanKaren/notetaker-application",
    title: "Note Taker App",
  },
  {
    img: WeatherApp,
    url: "https://shirvanyankaren.github.io/Cities-Weather-Dashboard/",
    repository: "https://github.com/ShirvanyanKaren/Cities-Weather-Dashboard",
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
    <Footer />
    </>
  );
};

export default Portfolio;
