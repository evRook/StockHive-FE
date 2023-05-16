import React, { useState } from 'react';
import './PWConfirm.css'
import { useParams, useNavigate } from "react-router-dom";
import axios from 'axios'
import Cookies from 'js-cookie';

export default function PWConfirm() {
    const navigate = useNavigate()

    const { uid, token } = useParams()

    const [ npw, setNpw ] = useState('')
    const [ rnpw, setRnpw ] = useState('')



    function handleSubmit(){
        
        const data = {
            uid: uid,
            token: token,
            new_password: npw,
            re_new_password: rnpw
        }

        const csrfToken = Cookies.get('csrftoken')

        const headers = {
            headers: {
                'Content-type': 'application/json',
                'X-CSRFToken': csrfToken,
            }
        }

        const dataStr = JSON.stringify(data)

        axios.post('http://localhost:8000/auth/users/reset_password_confirm/', dataStr, headers)
            .then((response) => {
                response.json()
            })
            .then((response) => {
                console.log(response)
            })
            .catch((error) => {
                console.log(error)
            })

            navigate('/')
    }


    
    return ( 
        <div className="PWConfirm--container">
            <div className="PWConfirm--content__container">
                <div className="PWConfirm--title__container">
                    <p className="PWConfirm--title">Set New Password</p>
                </div>
                <div className="PWConfirm--form__container">
                    <form 
                        className='PWConfirm--form' 
                        onSubmit = {handleSubmit}
                    >
                        <label>New Password:</label>
                        <input 
                            name='password'
                            type='password'
                            placeholder='New Password'
                            minLength='8'
                            value={npw}
                            onChange={(e) => {setNpw(e.target.value)}}
                            required 
                        />
                        <label>Confirm New Password:</label>
                        <input 
                            name='password'
                            type='password'
                            placeholder='Confirm New Password'
                            minLength='8'
                            value={rnpw}
                            onChange={(e) => {setRnpw(e.target.value)}}
                            required 
                        />
                        <button type='submit'>Reset</button>
                    </form>
                </div>
            </div>
        </div>
     );
}