import React from 'react';
import './Login.css'

export default function Login() {
    return ( 
        <div className="login--container">
            <div className="login--img__container">

            </div>
            <div className="login--content__container">
                <div className="login--title__container">
                    <p className="login--title">Log In</p>
                </div>
                <div className="login--form__container">
                    <form className='login--form'>
                        <label>Email or User Name</label>
                        <input 
                            name='Email Username'
                            type="text" 
                        />
                        <label>Password:</label>
                        <input 
                            name='Password'
                            type="password" 
                        />
                        <button type='submit'>Log In</button>
                    </form>
                </div>
            </div>
        </div>
     );
}
