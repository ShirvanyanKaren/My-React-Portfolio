import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../style/Nav.scss'
import { NavLink } from 'react-router-dom';
import { faHome, faHomeUser,faEnvelope, faFolder } from '@fortawesome/free-solid-svg-icons';
import { faFlipboard } from '@fortawesome/free-brands-svg-icons';


const Navbar = () => {
return (
   
        <div className='nav-bar'>
        <nav>
        <NavLink exact="true" className="home-page" to="/Home" >
            <FontAwesomeIcon icon={faFolder} color="#4d4d4e" />
        </NavLink>
        <NavLink exact="true"  className="about-page" to="/" >
            <FontAwesomeIcon icon={faHomeUser} color="#4d4d4e" />
        </NavLink>
        <NavLink exact="true" className="contact-me" to="/Contact" >
            <FontAwesomeIcon exact="true" icon={faEnvelope} color="#4d4d4e" />
        </NavLink>
        <NavLink exact="true" className="portfolio" to="/Portfolio" >
            <FontAwesomeIcon icon={faFlipboard} color="#4d4d4e" />
        </NavLink>
        </nav>
        </ div>
  
)
}

export default Navbar;