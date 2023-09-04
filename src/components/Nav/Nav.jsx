import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Nav.scss';
import { NavLink, useLocation } from 'react-router-dom';
import { useState } from 'react';

import { faHomeUser, faEnvelope, faFolder, faFileAlt } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const currentPage = useLocation().pathname;
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className={`nav-bar${isMenuOpen ? ' open' : ''}`}>
      <nav>
        <NavLink exact="true" className={currentPage === '/' ? 'about-active' : 'about-link'} to="/">
          <FontAwesomeIcon icon={faHomeUser} color="#4d4d4e" />
        </NavLink>
        <NavLink
          exact="true"
          className={currentPage === '/Portfolio' ? 'portfolio-active' : 'portfolio-link'}
          to="/Portfolio"
        >
          <FontAwesomeIcon icon={faFolder} color="#4d4d4e" />
        </NavLink>
        <NavLink
          exact="true"
          className={currentPage === '/Resume' ? 'resume-active' : 'resume-link'}
          to="/Resume"
        >
          <FontAwesomeIcon icon={faFileAlt} color="#4d4d4e" />
        </NavLink>
        <NavLink
          exact="true"
          className={currentPage === '/Contact' ? 'contact-active' : 'contact-link'}
          to="/Contact"
        >
          <FontAwesomeIcon exact="true" icon={faEnvelope} color="#4d4d4e" />
        </NavLink>
        <div className="burger-nav" onClick={toggleMenu}>
          <div className={`burger-menu${isMenuOpen ? ' open' : ''}`}>
            <div className="burger-bar"></div>
            <div className="burger-bar"></div>
            <div className="burger-bar"></div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
