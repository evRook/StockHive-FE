import React, { useState, useEffect }from 'react';
import './Login.css'
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios'
import Cookies from 'js-cookie';

export default function Login({handleAuth}) {
    const navigate = useNavigate()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    let user = JSON.parse(localStorage.getItem('user'))

    function handleSubmit(e){
        e.preventDefault()

        const data = {
            email: email,
            password: password
        }

        const csrfToken = Cookies.get('csrftoken')

        const headers = {
            headers: {
                'Content-type': 'application/json',
                'X-CSRFToken': csrfToken,
            }
        }

        const dataStr = JSON.stringify(data)

        window.localStorage.clear()

        axios.post('http://localhost:8000/auth/jwt/create', dataStr, headers)
            .then((response) => {
                if(response.status === 200){
                    localStorage.setItem('user', JSON.stringify(response.data))
                    alert('Logged In Successfully')
                    navigate('/profile')
                }
                
                return response.data
            })
            .catch((error) => {
                console.log(error)
                alert('Login Failed')
            })
    }


    return ( 
        <div className="login--container">
            <div className="login--sub__container">
                <div className="login--img__container">
                </div>
                <div className="login--content__container">
                    <div className="login--title__container">
                        <p className="login--title">Log In</p>
                        <img src={require('./Components/img/logo.png')} alt="" className="login--logo" />
                    </div>
                    <div className="login--form__container">
                        <form 
                            className='login--form' 
                            onSubmit = {handleSubmit}
                        >
                            <label>Email:</label>
                            <input 
                                name='email'
                                type='email'
                                placeholder='Email'
                                className='login--form--input'
                                value={email}
                                onChange={(e) => {setEmail(e.target.value)}}
                                required
                            />
                            <label>Password:</label>
                            <input 
                                name='password'
                                type='password'
                                placeholder='Password'
                                className='login--form--input'
                                minLength='8'
                                value={password}
                                onChange={(e) => {setPassword(e.target.value)}}
                                required 
                            />
                            <button type='submit' className='login--form--btn'>Log In</button>
                        </form>
                    </div>
                    <div className="signup--link__container">
                        <p>Not a Member?</p>
                        <Link to="/signup" className='header--link'>
                            <p>Create Account</p>
                        </Link>
                        <p>Forgot your Password?</p>
                        <Link to="/reset_password" className='header--link'>
                            <p>Reset Password</p>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
     );
}
