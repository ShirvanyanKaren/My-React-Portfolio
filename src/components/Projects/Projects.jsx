import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Import FontAwesome icons
import { faChrome, faGithub, faInternetExplorer } from '@fortawesome/free-brands-svg-icons'; // Import specific icons
import './Projects.scss';
import 'animate.css'

const Projects = ( {project} ) => {
    console.log(project)
    return (
        <section className="project-card">
        <div className="project-card-content">
          <h2>{project.title}</h2>
          <a href={project.url}><img src={project.img} alt="My Project" /></a>
          <div className="project-links">
            <a href={project.repository} target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGithub} className="icon" />
            </a>
            <a href={project.url} target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faChrome} className="icon" />
            </a>
          </div>
        </div>
      </section>


    );

}



export default Projects