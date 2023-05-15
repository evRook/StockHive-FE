import React, { useState } from 'react';
import './Verify.css'
import { useNavigate, useParams } from "react-router-dom";
import { WireBtn } from './Components'
import axios from 'axios'
import Cookies from 'js-cookie';


export default function Verify() {
    const navigate = useNavigate()

    const { uid, token } = useParams()

    function handleSubmit(){
        
        const data = {
            uid: uid,
            token: token
        }

        const csrfToken = Cookies.get('csrftoken')

        const headers = {
            headers: {
                'Content-type': 'application/json',
                'X-CSRFToken': csrfToken,
            }
        }

        const dataStr = JSON.stringify(data)

        axios.post('http://localhost:8000/auth/users/activation/', dataStr, headers)
            .then((response) => {
                response.json()
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
        <div className="verify--container">
            <p className="verify--text">
                Verify your account to start tracking trades!
            </p>
            <WireBtn 
                title='Verify'
                type='submit' 
                onClick={handleSubmit}
            />
        </div>
     );
}