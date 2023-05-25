import React, { useState }from 'react';
import './SignUp.css'
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios'
import Cookies from 'js-cookie';

export default function SignUp() {
    const navigate = useNavigate()

    const [first, setFirst] = useState('')
    const [last, setLast] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [re_password, setRe_Password] = useState('')


    
    function handleSubmit(e){
        const submit_data = {
            first: first,
            last: last,
            email: email,
            password: password,
            re_password: re_password,
        }

        const csrfToken = Cookies.get('csrftoken')

        const headers = {
            headers: {
                'Content-type': 'application/json',
                'X-CSRFToken': csrfToken,
            }
        }

        const dataStr = JSON.stringify(submit_data)


        axios.post('https://stockhive-be.onrender.com/auth/users/', dataStr, headers)
            .then((response) => {
                response.json()
                alert('Please Verify Your Email')
            })
            .then((response) => {
                console.log(response)
            })
            .catch((error) => {
                console.log(error)
            })

        navigate('/login')
    }



    return ( 
        <div className="signup--container">
            <div className="signup--sub__container">
                <div className="signup--img__container">

                </div>
                <div className="signup--content__container">
                    <div className="signup--title__container">
                        <p className="signup--title">
                            Sign Up
                        </p>
                        <img src={require('./Components/img/logo.png')} alt="" className="signup--logo" />
                    </div>
                    <div className="signup--form__container">
                        <form 
                            className='signup--form'
                            onSubmit = {handleSubmit}
                        >
                            <label>First</label>
                            <input 
                                name='first'
                                type='text'
                                placeholder='First'
                                className='signup--form--input'
                                value={first}
                                onChange={(e) => {setFirst(e.target.value)}}
                            />
                            <label>Last</label>
                            <input 
                                name='last'
                                type='text'
                                placeholder='Last'
                                className='signup--form--input'
                                value={last}
                                onChange={(e) => {setLast(e.target.value)}} 
                            />
                            <label>Email</label>
                            <input 
                                name='email'
                                type='email'
                                placeholder='Email'
                                className='signup--form--input'
                                value={email}
                                onChange={(e) => {setEmail(e.target.value)}} 
                            />
                            <label>Password:</label>
                            <input 
                                name='password'
                                type='password'
                                placeholder='Password'
                                minLength='8'
                                className='signup--form--input'
                                value={password}
                                onChange={(e) => {setPassword(e.target.value)}}
                                required 
                            />
                            <label>Confirm Password:</label>
                            <input 
                                name='re_password'
                                type='password'
                                placeholder='Confirm Password'
                                minLength='8'
                                className='signup--form--input'
                                value={re_password}
                                onChange={(e) => {setRe_Password(e.target.value)}}
                                required 
                            />
                            <button type='submit' className='signup--form--btn'>Sign Up</button>
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
        </div>
     );
}
