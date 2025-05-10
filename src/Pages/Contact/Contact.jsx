import React from 'react'
import Locations from '../../Components/Locations'
import ContactForm from './ContactForm'
import ContactHome from '../../assets/ContactHome'
import ContactStart from '../../Components/ContactStart'
const Contact = () => {
  return (
    <div>
        <ContactHome/>
        <ContactForm/>    
        {/* <ContactStart/>   */}
        <Locations/>
    </div>
  )
}

export default Contact
