import './Contact.scss'
import 'animate.css'
import AnimatedLetters from '../../components/AnimatedLetters/AnimatedLetters'
import { useEffect, useRef, useState } from 'react'
import Footer from '../../components/Footer/Footer'
import emailjs from '@emailjs/browser'

const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate text-animate-h')
        }, 1000)
    }, [])

    const form = useRef();
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_2znmc3b', 'template_eufeoin', form.current, 'SSUEEoQVq8ReyXV1r')
        .then((result) => {
            console.log(result.text);
            console.log("Email Sent");
        }, (error) => {
            console.log(error.text);
        });
    };

return (
   
    <>
    
    <div className="heading">

    <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
              idx={15}
            />
        </h1>
    </div>
    <div className="contact">
   
      <form ref={form} onSubmit={sendEmail}>

        <label type="fname">First Name</label>
        <input type="text" name="user_name" placeholder="Your name" required />

        <label type="lname">Last Name</label>
        <input type="text" name="user_lastname" placeholder="Your last name" required />

        <label type="lname"> Email</label>
        <input type="email" name="user_email" placeholder="Your last name" required />

        <label type="country">Subject</label>
        <input type="text" name="subject" placeholder="Subject" required></input>

        <label type="subject">Message</label>
        <textarea name="message" placeholder="Your Message" style={{ height: '200px' }} required></textarea>

        <button type="submit" >Submit</button>

      </form>
    </div>
    <Footer />
    </>
   
)
}


export default Contact