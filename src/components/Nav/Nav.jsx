import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Nav.scss'
import { NavLink, useLocation } from 'react-router-dom'

import { faHomeUser,faEnvelope, faFolder, faFileAlt } from '@fortawesome/free-solid-svg-icons'



const Navbar = () => {
   
    const currentPage = useLocation().pathname;



return (


        <div className='nav-bar'>
        <nav>
        <NavLink exact="true"  className={currentPage === '/' ? 'about-active' : 'about-link'} to="/" >
            <FontAwesomeIcon icon={faHomeUser} color="#4d4d4e" />
        </NavLink>
        <NavLink exact="true" className={currentPage === '/Portfolio' ? 'portfolio-active' : 'portfolio-link'} to="/Portfolio" >
            <FontAwesomeIcon icon={faFolder} color="#4d4d4e" />
        </NavLink>
        <NavLink exact="true" className={currentPage === '/Resume' ? 'resume-active' : 'resume-link'} to="/Resume" >
            <FontAwesomeIcon icon={faFileAlt} color="#4d4d4e" />
        </NavLink>
        <NavLink exact="true" className={currentPage === '/Contact' ? 'contact-active' : 'contact-link'} to="/Contact" >
            <FontAwesomeIcon exact="true" icon={faEnvelope} color="#4d4d4e" />
        </NavLink>
        </nav>
        </ div>
  
)
}

export default Navbar;