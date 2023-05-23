import React, { useRef } from 'react';
import './Contact.css'

export default function Contact() {

    // const send = () => {

    // }

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
                            // onSubmit={send}
                        >
                            <label>Name:</label>
                            <input 
                                name='name'
                                type='text'
                                placeholder='Name'
                                className='contact--form--input'
                                required
                            />
                            <label>Email:</label>
                            <input 
                                name='email'
                                type='email'
                                placeholder='Email'
                                className='contact--form--input'
                                required
                            />
                            <label>Message:</label>
                            <textarea 
                                name='comments'
                                type='text'
                                placeholder='1000 Character Limit*'
                                maxLength='1000'
                                className='contact--form--textField'
                                required
                            />
                            <button type='submit' className='contact--form--btn'>Send</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
     );
}
