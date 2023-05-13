import React, { useState }from 'react';
import './Login.css'
import { Link, Redirect } from "react-router-dom";

export default function Login() {
    const [data, setData] = useState({email: '', password: ''})
    const {email, password} = data

    const onChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }
    
    const onSubmit = (e) => {
        e.preventDefault()
    }

    return ( 
        <div className="login--container">
            <div className="login--img__container">

            </div>
            <div className="login--content__container">
                <div className="login--title__container">
                    <p className="login--title">Log In</p>
                </div>
                <div className="login--form__container">
                    <form 
                        className='login--form' 
                        onSubmit = {(e) => {
                            e.preventDefault()
                        }}
                    >
                        <label>Email</label>
                        <input 
                            name='email'
                            type='email'
                            placeholder='Email'
                            required
                        />
                        <label>Password:</label>
                        <input 
                            name='password'
                            type='password'
                            placeholder='Password'
                            minLength='8'
                            required 
                        />
                        <button type='submit'>Log In</button>
                    </form>
                </div>
                <div className="signup--link__container">
                    <p>Not a Member?</p>
                    <Link to="/login" className='header--link'>
                        <p>Create Account</p>
                    </Link>
                    <Link to="/reset_password" className='header--link'>
                        <p>Forgot your Password?</p>
                    </Link>
                </div>
            </div>
        </div>
     );
}
