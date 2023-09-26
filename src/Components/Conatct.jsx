import { useForm, ValidationError } from '@formspree/react';
import Lottie from 'react-lottie-player'
import './about.css'
import contact from '../images/photo_2023-09-08_13-05-15.jpg'
const Contact = () => {
    const [state, handleSubmit] = useForm("mgejzyjq");
    if (state.succeeded) {
        return <p style={{textAlign:"center", fontFamily:"Poppins"}}>Thanks for For Your Inquiry!</p>;
    }
  return (
    <div className='contactform' id='contactus'>
      <h3> Contact <span> Me</span></h3>
      <div className='content'>
      <div className='animation'>
         <img src={contact}/>
          </div>
    <form onSubmit={handleSubmit}>
         <label htmlFor="name">
      Full Name
    </label>
    <input
      id="name"
      type="text" 
      name="name"
      required

    />
    <ValidationError 
      prefix="Name" 
      field="name"
      errors={state.errors}
    />
     <label htmlFor="number">
      Phone Number
    </label>
    <input
      id="number"
      type="tel" 
      name="number"
      required
    />
    <ValidationError 
      prefix="Phone Number" 
      field="phone number"
      errors={state.errors}
    />
    <label htmlFor="email">
      Email Address
    </label>
    <input
      id="email"
      type="email" 
      name="email"
      required

    />
    <ValidationError 
      prefix="Email" 
      field="email"
      errors={state.errors}
    />
    <label>Message</label>
    <textarea
      id="message"
      name="message"
      required

    />
    <ValidationError 
      prefix="Message" 
      field="message"
      errors={state.errors}
    />
    <input type="submit" disabled={state.submitting} />
  </form>
  </div>
  </div>
  )
}

export default Contact
