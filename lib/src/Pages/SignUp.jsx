import React from 'react';
import './SignUp.css'

export default function SignUp() {
    return ( 
        <div className="signup--container">
            <div className="sigup--title__container">
                <p className="sigup--title">
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
                </form>
            </div>
        </div>
     );
}
