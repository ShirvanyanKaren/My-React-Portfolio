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
  const [isNameValid, setIsNameValid] = useState(true);
  const [isLastNameValid, setIsLastNameValid] = useState(true);
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isSubjectValid, setIsSubjectValid] = useState(true);
  const [isMessageValid, setIsMessageValid] = useState(true);



  useEffect(() => {
    setTimeout(() => {
      setLetterClass("text-animate text-animate-h");
    }, 1000);
  }, []);
 
 const nameBlurHandler = () =>{
    if (inputValues.first_name.length < 1) {
      setIsNameValid(false);
    } else {
      setIsNameValid(true);
    }
  };

  const lastNameBlurHandler = () => {
    if (inputValues.last_name.length < 1) {
      setIsLastNameValid(false);
    } else {
      setIsLastNameValid(true);
    }
  };

  const emailBlurHandler = () => {
    if (inputValues.email.length < 1) {
      setIsEmailValid(false);
    } else {
      setIsEmailValid(true);
    }
  };

  const subjectBlurHandler = () => {
    if (inputValues.subject.length < 1) {
      setIsSubjectValid(false);
    } else {
      setIsSubjectValid(true);
    }
  };

  const messageBlurHandler = () => {
    if (inputValues.message.length < 1) {
      setIsMessageValid(false);
    } else {
      setIsMessageValid(true);
    }
  };


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
          {isNameValid ? null : ( <p className="error">Please enter your first name</p>)}
          <input
            type="text"
            id="fname"
            name="user_name"
            value={inputValues.first_name}
            onChange={(e) => setInputValues({...inputValues, first_name: e.target.value})
            }
            onBlur={nameBlurHandler}
            placeholder="Your name"
            required
          />

          <label type="lname">Last Name</label>
          {isLastNameValid ? null : ( <p className="error">Please enter your last name</p>)}
          <input
            id="lname"
            type="text"
            name="user_lastname"
            value={inputValues.last_name}
            onChange={(e) => setInputValues({...inputValues, last_name: e.target.value})
          }
            onBlur={lastNameBlurHandler}
            placeholder="Your last name"
            required
          />

          <label type="lname"> Email</label>
          {isEmailValid ? null : ( <p className="error">Please enter your email</p>)}
          <input
            id="email"
            type="email"
            name="user_email"
            onChange={(e) => setInputValues({...inputValues, email: e.target.value})
          }
            onBlur={emailBlurHandler}
            value={inputValues.email}
            placeholder="Your last name"
            required
          />

          <label type="subject">Subject</label>
          {isSubjectValid ? null : ( <p className="error">Please enter a subject</p>)}
          <input
            id="subject"
            type="text"
            name="subject"
            onChange={(e) => setInputValues({...inputValues, subject: e.target.value})
          }
            value={inputValues.subject}
            onBlur={subjectBlurHandler}
            placeholder="Subject"
            required
          ></input>

          <label type="message">Message</label>
          {isMessageValid ? null : ( <p className="error">Please enter a message</p>)}
          <textarea
            id="message"
            name="message"
            value={inputValues.message}
            onChange={(e) => setInputValues({...inputValues, message: e.target.value})
        }
            onBlur={messageBlurHandler}
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
