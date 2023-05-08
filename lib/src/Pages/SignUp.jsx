import React from 'react';
import './SignUp.css'
import { Link } from "react-router-dom";

export default function SignUp() {
    return ( 
        <div className="signup--container">
            <div className="signup--img__container">

            </div>
            <div className="signup--content__container">
                <div className="signup--title__container">
                    <p className="signup--title">
                        Sign Up
                    </p>
                </div>
                <div className="signup--form__container">
                    <form className='signup--form'>
                        <label>First</label>
                        <input 
                            name='First Name'
                            type="text" 
                        />
                        <label>Last</label>
                        <input 
                            name='Last Name'
                            type="text" 
                        />
                        <label>Email</label>
                        <input 
                            name='Email'
                            type="text" 
                        />
                        <label>User Name</label>
                        <input 
                            name='User Name'
                            type="text" 
                        />
                        <label>Password:</label>
                        <input 
                            name='Password'
                            type="password" 
                        />
                        <label>Confirm Password:</label>
                        <input 
                            name='Confirm Password'
                            type="password confirm" 
                        />
                        <button type='submit'>Sign Up</button>
                    </form>
                </div>
                <div className="signup--link__container">
                    <p>Already a User?</p>
                    <Link to="/login" className='header--link'>
                        <p>Log In</p>    
                    </Link>
                </div>
            </div>
        </div>
     );
}
