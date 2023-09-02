import '../style/Contact.scss'
import 'animate.css'
import AnimatedLetters from '../components/AnimatedLetters'
import { useEffect, useState } from 'react';


const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

return (
   
    <>
    <div className="heading">

    <h1 className='text-animate-h'>
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

        <input type="submit" value="Submit" />

      </form>
    </div>
    </>
   
)
}


export default Contact