import React from 'react';
import './Login.css'
import { Link } from "react-router-dom";

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
                <div className="signup--link__container">
                    <p>Not a User?</p>
                    <Link to="/login" className='header--link'>
                        <p>Create Account</p>
                    </Link>
                </div>
            </div>
        </div>
     );
}
