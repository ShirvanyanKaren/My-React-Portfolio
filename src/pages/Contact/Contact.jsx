import "./Contact.scss";
import "animate.css";
import AnimatedLetters from "../../components/AnimatedLetters/AnimatedLetters";
import { useEffect, useRef, useState } from "react";
import Footer from "../../components/Footer/Footer";
import emailjs from "@emailjs/browser";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

const Contact = () => {

  const [letterClass, setLetterClass] = useState("text-animate");
  const [isSubmitted, setIsSubmitted] = useState(false); 
  const [inputValues, setInputValues] = useState({
    first_name:"",
    last_name: "",
    email: "",
    subject: "",
    message: "",
  });

  useEffect(() => {
    setTimeout(() => {
      setLetterClass("text-animate text-animate-h");
    }, 1000);
  }, []);


  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_2znmc3b",
        "template_eufeoin",
        form.current,
        "SSUEEoQVq8ReyXV1r"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("Email Sent");
          setIsSubmitted(true);
          setInputValues({
            first_name:"",
            last_name: "",
            email: "",
            subject: "",
            message: "",
          });
        },
        (error) => {
          console.log(error.text);
        }
      );
  };



 
  return (
    <>
    <div className="contact-container">
      <div className="heading">
        <h1>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={["C", "o", "n", "t", "a", "c", "t", " ", "m", "e"]}
            idx={15}
          />
        </h1>
      </div>
      <div className="contact">
        <form className='myform' ref={form} onSubmit={sendEmail}>
          <label type="fname">First Name</label>
          <input
            type="text"
            id="fname"
            name="user_name"
            value={inputValues.first_name}
            onChange={(e) => setInputValues({...inputValues, first_name: e.target.value})
            }
            placeholder="Your name"
            required
          />

          <label type="lname">Last Name</label>
          <input
            id="lname"
            type="text"
            name="user_lastname"
            value={inputValues.last_name}
            onChange={(e) => setInputValues({...inputValues, last_name: e.target.value})
          }
            placeholder="Your last name"
            required
          />

          <label type="lname"> Email</label>
          <input
            id="email"
            type="email"
            name="user_email"
            onChange={(e) => setInputValues({...inputValues, email: e.target.value})
          }
            value={inputValues.email}
            placeholder="Your last name"
            required
          />

          <label type="subject">Subject</label>
          <input
            id="subject"
            type="text"
            name="subject"
            onChange={(e) => setInputValues({...inputValues, subject: e.target.value})
          }
            value={inputValues.subject}
            placeholder="Subject"
            required
          ></input>

          <label type="message">Message</label>
          <textarea
            id="message"
            name="message"
            value={inputValues.message}
            onChange={(e) => setInputValues({...inputValues, message: e.target.value})
        }
            placeholder="Your Message"
            style={{ height: "200px" }}
            required
          ></textarea>
          <div className="submission">
          <button type="submit">Submit</button>
          {isSubmitted ? (
          <div className="success">
          <FontAwesomeIcon icon={faCheckCircle}/><p className="success-text">Thank you for reaching out</p>
          </div>
           ): null}
          </div>
        </form>
      </div>
    </div>
      <Footer />
    </>
  );
};

export default Contact;
