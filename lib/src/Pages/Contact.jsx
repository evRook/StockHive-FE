import React from 'react';
import './Contact.css'

export default function Contact() {
    return ( 
        <div className="contact--container">
            <div className="signup--title__container">
                    <p className="signup--title">
                        Sign Up
                    </p>
                </div>
                <div className="signup--form__container">
                    <form 
                        className='signup--form'
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
                        <label>Comments & Questions:</label>
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
     );
}
