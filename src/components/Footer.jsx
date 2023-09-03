import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import "../style/Footer.scss";
import { NavLink } from "react-router-dom";
import 'animate.css'

export default function Footer() {
  return (
    <div className="footer">
      <h1>Connect with me!</h1>
      <div className="links">
        <NavLink
          exact="true"
          className="github"
          to="github.com/ShirvanyanKaren"
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
  );
}
