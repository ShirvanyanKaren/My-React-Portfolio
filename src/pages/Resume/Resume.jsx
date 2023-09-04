
import "./Resume.scss";
import 'animate.css'
import Divider from "../../components/Divider/Divider";
import { faBook, faCode, faDownload, faFileCirclePlus, faGear, faLightbulb } from "@fortawesome/free-solid-svg-icons";
import JavaScript from "../../images/logos/javascript.png"
import Java from "../../images/logos/java.png"
import CPlusPlus from "../../images/logos/c++.png"
import MySQL from "../../images/logos/mysql.png"
import MongoDB from "../../images/logos/mongodb.png"
import NodeJs from "../../images/logos/nodejs.png"
import Mern from "../../images/logos/mern.png"
import HandleBars from "../../images/logos/handlebars.png"
import Berkeley from "../../images/logos/berkeley.png"
import Csun from "../../images/logos/csun.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ResumeDl from "../../../Assets/Resume.pdf"
import Footer from "../../components/Footer/Footer";


const Resume = () => {

  return (
    <>
      
      <section className="resume-container">
        <h2>My Resume</h2>
        <Divider iconClass={faFileCirclePlus} />
        <div className="resume-btn">
        <a href={ResumeDl}><button type="submit" ><FontAwesomeIcon icon={faDownload}/></button></a>
        </div>
        
        <div className="skills">
          <h2> My Skill Set</h2>
          <Divider iconClass={faLightbulb} />
          <div className="skills-list">
            <ul>
              <li>Data Analysis</li>
              <li>Data Structures and Algorithms</li>
              <li>Web Development</li>
            </ul>
            <ul>
              <li>Risk Management</li>
              <li>Financial Modeliing with Python</li>
              <li>Investment Analysis</li>
            </ul>
          </div>
          
            
          
        </div>
        <div className="programming">
          <h2> Programming Experience</h2>
          <Divider iconClass={faCode} />
          <div className="program-list">
            <ul>
              <li><img src={JavaScript} /></li>
              <li><img src={Java} /></li>
              <li><img className="cplus" src={CPlusPlus} /></li>
              <li><img src={MySQL} /></li>
            </ul>
            <ul>
            <li><img src={MongoDB} /></li>
            <li><img src={NodeJs} /></li>
            <li><img className="mern" src={Mern} /></li>
            <li><img src={HandleBars} /></li>
            </ul>
          </div>
        </div>
        
        <div className="education">
          <h2>Education</h2>
          <Divider iconClass={faBook} />
          <div className="education-list">
          <ul>
          <li><img src={Berkeley} /></li>
          <li><img src={Csun} /></li>
          </ul>
          <ul className="uni-names"> 
            <li><h3>University of Berkeley, California</h3>
            <br/><p>Full Stack Web Development</p></li>
            <li><h3>California State University Northridge</h3><br/><p>Bachelor of Financial Analysis</p></li>
          </ul>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Resume;
