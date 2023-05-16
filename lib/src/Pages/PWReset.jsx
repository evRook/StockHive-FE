import React, { useState } from 'react';
import './PWReset.css'
import { useParams } from "react-router-dom";
import axios from 'axios'
import Cookies from 'js-cookie';

export default function PWReset() {

    const { uid, token } = useParams()

    const [ email, setEmail ] = useState('')


    function handleSubmit(){
        
        const data = {
            uid: uid,
            token: token,
            email: email
        }

        const csrfToken = Cookies.get('csrftoken')

        const headers = {
            headers: {
                'Content-type': 'application/json',
                'X-CSRFToken': csrfToken,
            }
        }

        const dataStr = JSON.stringify(data)

        axios.post('http://localhost:8000/auth/users/reset_password/', dataStr, headers)
            .then((response) => {
                response.json()
            })
            .then((response) => {
                console.log(response)
            })
            .catch((error) => {
                console.log(error)
            })
    }


    return ( 
        <div className="PWReset--container">
            <div className="PWReset--content__container">
                <div className="PWReset--title__container">
                    <p className="PWReset--title">Reset Password</p>
                </div>
                <div className="PWReset--form__container">
                    <form 
                        className='PWReset--form' 
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
                        <button type='submit'>Send</button>
                    </form>
                </div>
            </div>
        </div>
     );
}
