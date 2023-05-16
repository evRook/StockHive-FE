import React from 'react';
import './Contact.css'

export default function Contact() {
    return ( 
        <div className="contact--container">
            <div className="contact--content__container">
                <div className="contact--title__container">
                    <p className="contact--title">
                        Contact Us
                    </p>
                </div>
                <div className="contact--form__container">
                    <form 
                        className='contact--form'
                    >
                        <label>Name:</label>
                        <input 
                            name='name'
                            type='text'
                            placeholder='Name'
                        />
                        <label>Email:</label>
                        <input 
                            name='email'
                            type='email'
                            placeholder='Email'
                        />
                        <label>Message:</label>
                        <textarea 
                            name='comments'
                            type='text'
                            placeholder='1000 Character Limit*'
                            maxLength='1000'
                        />
                        <button type='submit'>Sign Up</button>
                    </form>
                </div>
            </div>
        </div>
     );
}
