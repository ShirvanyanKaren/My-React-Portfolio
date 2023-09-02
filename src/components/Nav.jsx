import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../style/Nav.scss'
import { NavLink } from 'react-router-dom';
import { faHomeUser,faEnvelope, faFolder, faFile, faFileArrowUp, faFileAlt } from '@fortawesome/free-solid-svg-icons';
import { faDochub, faFlipboard } from '@fortawesome/free-brands-svg-icons';


const Navbar = () => {
return (
   
        <div className='nav-bar'>
        <nav>
        <NavLink exact="true"  className="about-page" to="/" >
            <FontAwesomeIcon icon={faHomeUser} color="#4d4d4e" />
        </NavLink>
        <NavLink exact="true" className="home-page" to="/Resume" >
            <FontAwesomeIcon icon={faFolder} color="#4d4d4e" />
        </NavLink>
        <NavLink exact="true" className="portfolio-page" to="/Portfolio" >
            <FontAwesomeIcon icon={faFileAlt} color="#4d4d4e" />
        </NavLink>
        <NavLink exact="true" className="contact-me" to="/Contact" >
            <FontAwesomeIcon exact="true" icon={faEnvelope} color="#4d4d4e" />
        </NavLink>
        </nav>
        </ div>
  
)
}

export default Navbar;