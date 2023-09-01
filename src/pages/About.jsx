import '../style/About.scss'
import {
    faCss3,
    faGitAlt,
    faHtml5,
    faJava,
    faJsSquare,
    faNode,
    faReact,
    faSquareJs,
} from '@fortawesome/free-brands-svg-icons'

import 'animate.css';

import AnimatedLetters from '../components/AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect, useState } from 'react';


export default function About() {
    const [letterClass, setLetterClass] = useState('text-animate')

  
    useEffect(() => {
        return setTimeout(() => {
          setLetterClass('text-animate-hover')
        }, 3000)
      }, [])
    return (
        <>
        
        <section className="container about-me">
            
        <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15}
            />
        </h1>
        <p> I am a motivated university undergraduate student pursuing a
          major in Finance with a minor in computer science. I am eager to
          launch my career in the myriad of dynamic realms of finance and fintech.
        </p>
        <p>
          I am actively seeking job and experience opportunities to leverage and
          develop my skills and knowledge. I plan on garnering some internship and
          industry experience throughout the course of my undergrad studie. Upon completion
          of my undergraduate studies, I hope to land a full-time job and develop a career
          in these industries.
        </p>
        <p>
          I am currently enrolled in the UC Berkeley Coding Bootcamp where I have honed my
          abilities and developed various projects that are attached to my portfolio below.
          With a passion in finance and technology, I am poised to contribute to the ever-changing
          of the tech and financial tech industries.
        </p>
        
      </section>

             <div className="stage-cube-cont">
             <div className="cubespinner">
               <div className="face1">
                 <FontAwesomeIcon icon={faNode} color="#68a063" />
               </div>
               <div className="face2">
                 <FontAwesomeIcon icon={faHtml5} color="#F06529" />
               </div>
               <div className="face3">
                 <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
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
        
        
       </>
    )
}