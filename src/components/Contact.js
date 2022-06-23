// Terima props lalu tampilkan dalam Contact component
// Kalian bisa membuat CSS sendiri di src/components/Contact.css
import React from 'react';
import './Contact.css';

const Contact = (props) => {
const {name, photo, phone, email} = props.data;
    return (
        <div className='contact-card'>
            <div className='img-card'> 
                <img src={photo} alt="photo" />
            </div>
            <div className='detail-contact'>
                <h3>{name} </h3>
                <p> {phone} </p>
                <p> {email} </p>
            </div>
        </div>
    )
}

export default Contact;