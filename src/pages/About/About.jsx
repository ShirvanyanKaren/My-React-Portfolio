import React, { useEffect, useState } from 'react';
import './About.scss';
import {
    faCss3,
    faHtml5,
    faJava,
    faJsSquare,
    faNode,
    faReact,
    faSass,
    faPython,
} from '@fortawesome/free-brands-svg-icons';
import Python from '../../images/logos/python.png';
import myPic from "../../images/imageofme.png";

import AnimatedLetters from '../../components/AnimatedLetters/AnimatedLetters';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink } from 'react-router-dom';
import { faGithub, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';

export default function About() {
    const [letterClass] = useState('text-animate');
  


    return (
        <>

     <section className="container about-me">
       <div className='content'>
        <div className='myImage'>
       <img src={myPic}/>
       </div>
       <div className='summary'>
        <div>
       <h1 className="text-animate-h">
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15}
            />
        </h1>
        </div>
        <p> I am a motivated university undergraduate student pursuing a
          major in Finance with a minor in Computer Science. I am eager to
          launch my career as a Software Engineer or Quantitative Analyst.
        </p>
        <p>
          I am actively seeking job and experience opportunities to leverage and
          develop my skills and knowledge. I plan on garnering some internship and
          industry experience throughout the course of my undergrad studies. Upon completion
          of my undergraduate degree, I hope to land a full-time job and develop a career
          in these industries.
        </p>
        <p>
          I recently completed the UC Berkeley Coding Bootcamp where I honed my
          abilities and developed various projects that are attached to my portfolio.
          With a passion in finance and technology, I am poised to contribute to the ever-changing
          tech and finance industries.
        </p>
        </div>
        </div>
      </section>

             <div className="stage-cube-cont">
             <div className="cubespinner">
               <div className="face1">
                 <FontAwesomeIcon icon={faNode} color="#68a063" />
               </div>
                <div className="face2">
                  <FontAwesomeIcon icon={faPython} color="#28a4d9" />
                </div>
               <div className="face3">
                 <FontAwesomeIcon icon={faSass} color="#c69" />
               </div>
               <div className="face4">
                 <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
               </div>
               <div className="face5">
                 <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
               </div>
               <div className="face6">
                 <FontAwesomeIcon icon={faJava} color="#2488e2" />
               </div>
             </div>
           </div>
    <div className="about-footer">
      <h1>Connect with me!</h1>
      <div className="links">
        <NavLink
          exact="true"
          className="github"
          to="https://www.github.com/ShirvanyanKaren"
        >
          <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
        </NavLink>
        <NavLink
          exact="true"
          className="linkedin"
          to="https://www.linkedin.com/in/karen-shirvanyan-8a46a01a3/"
        >
          <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
        </NavLink>
        <NavLink exact="true" className="instagram" to="instagram.com/slshivii">
          <FontAwesomeIcon icon={faInstagram} color="#4d4d4e" />
        </NavLink>
      </div>
    </div>
    </>
            
        
    );
}
