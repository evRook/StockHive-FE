import React, { useState, useEffect }from 'react';
import './Login.css'
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios'
import Cookies from 'js-cookie';

export default function Login() {
    const navigate = useNavigate()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isAuth, setIsAuth] = useState(false)

    let user = JSON.parse(localStorage.getItem('user'))

    
    // useEffect(() => {
    //     if(user.access !== null){
    //         setIsAuth(true)
    //     }
    // }, [isAuth])

    
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

        axios.post('http://localhost:8000/auth/jwt/create', dataStr, headers)
            .then((response) => {
                localStorage.clear()
                if(response.data.access){
                    localStorage.setItem('user', JSON.stringify(response.data))
                    alert('Logged In Successfully')
                }
                // console.log(response)
                return response.data
            })
            .catch((error) => {
                console.log(error)
            })
        
        // const user = JSON.parse(localStorage.getItem('user'))
        // console.log(user)

        console.log(isAuth)

        navigate('/profile', {state: isAuth})

    }


    return ( 
        <div className="login--container">
            <div className="login--sub__container">
                <div className="login--img__container">

                </div>
                <div className="login--content__container">
                    <div className="login--title__container">
                        <p className="login--title">Log In</p>
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
                                value={email}
                                onChange={(e) => {setEmail(e.target.value)}}
                                required
                            />
                            <label>Password:</label>
                            <input 
                                name='password'
                                type='password'
                                placeholder='Password'
                                minLength='8'
                                value={password}
                                onChange={(e) => {setPassword(e.target.value)}}
                                required 
                            />
                            <button type='submit'>Log In</button>
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
