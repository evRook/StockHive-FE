import React from 'react';
import './Contact.css'

export default function Contact() {
    return ( 
        <div className="contact--container">
            <div className="contact--sub__container">
                <div className="contact--img__container">
                </div>
                <div className="contact--content__container">
                    <div className="contact--title__container">
                        <p className="contact--title">
                            Contact Us
                        </p>
                        <img src={require('./Components/img/logo.png')} alt="" className="login--logo" />
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
                                className='contact--form--input'
                            />
                            <label>Email:</label>
                            <input 
                                name='email'
                                type='email'
                                placeholder='Email'
                                className='contact--form--input'
                            />
                            <label>Message:</label>
                            <textarea 
                                name='comments'
                                type='text'
                                placeholder='1000 Character Limit*'
                                maxLength='1000'
                                className='contact--form--textField'
                            />
                            <button type='submit' className='contact--form--btn'>Send</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
     );
}
