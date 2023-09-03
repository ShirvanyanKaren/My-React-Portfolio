import './Contact.scss'
import 'animate.css'
import AnimatedLetters from '../../components/AnimatedLetters/AnimatedLetters'
import { useEffect, useState } from 'react'
import Footer from '../../components/Footer/Footer'
// import emailjs from 'emailjs-com';

const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate text-animate-h')
        }, 1000)
    }, [])

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
   
      <form>

        <label type="fname">First Name</label>
        <input type="text" id="fname" name="firstname" placeholder="Your name" required />

        <label type="lname">Last Name</label>
        <input type="text" id="lname" name="lastname" placeholder="Your last name" required />

        <label type="lname"> Email</label>
        <input type="email" id="lname" name="lastname" placeholder="Your last name" required />

        <label type="country">Subject</label>
        <input type="text" name="subject" placeholder="Subject" required></input>

        <label type="subject">Message</label>
        <textarea id="subject" name="subject" placeholder="Your Message" style={{ height: '200px' }} required></textarea>

        <button type="submit" >Submit</button>

      </form>
    </div>
    <Footer />
    </>
   
)
}


export default Contact