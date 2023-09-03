import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../style/Nav.scss'
import { NavLink } from 'react-router-dom';
import { faHomeUser,faEnvelope, faFolder, faFileAlt } from '@fortawesome/free-solid-svg-icons';



const Navbar = () => {
return (
   
        <div className='nav-bar'>
        <nav>
        <NavLink exact="true"  className="about-page" to="/" >
            <FontAwesomeIcon icon={faHomeUser} color="#4d4d4e" />
        </NavLink>
        <NavLink exact="true" className="home-page" to="/Portfolio" >
            <FontAwesomeIcon icon={faFolder} color="#4d4d4e" />
        </NavLink>
        <NavLink exact="true" className="portfolio-page" to="/Resume" >
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