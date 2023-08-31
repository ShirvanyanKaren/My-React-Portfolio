import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../style/Nav.scss'
import { NavLink } from 'react-router-dom';
import { faHome, faHomeUser,faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faAccessibleIcon, faAmazon, faApper, faFlipboard } from '@fortawesome/free-brands-svg-icons';


const Navbar = () => {
return (
   
        <div className='nav-bar'>
        <NavLink className='logo'>
            {/* <img alt="mylogo" />
            <img alt="mylogo" /> */}
             <FontAwesomeIcon  color="#4d4d4e" />
        </NavLink>
        <nav>
        <NavLink exact="true" className="home-page" to="/" >
            <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
        </NavLink>
        <NavLink exact="true"  className="about" to="/about" >
            <FontAwesomeIcon icon={faHomeUser} color="#4d4d4e" />
        </NavLink>
        <NavLink exact="true" className="contact" to="/portfolio" >
            <FontAwesomeIcon exact="true" icon={faEnvelope} color="#4d4d4e" />
        </NavLink>
        <NavLink key={1} exact="true" className="active" to="/contact" >
            <FontAwesomeIcon icon={faFlipboard} color="#4d4d4e" />
        </NavLink>
        </nav>
        </ div>
  
)
}

export default Navbar;