import React, { useState } from 'react';
import './Verify.css'
import { useNavigate, useParams } from "react-router-dom";
import { SolidBtn } from './Components'
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

        axios.post('https://stockhive-be.onrender.com/auth/users/activation/', dataStr, headers)
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
            <div className="verify--content">
                <img src={require('./Components/img/logo.png')} alt="" className="signup--logo" />
                <div className="verify--text__container">
                    <p className="verify--title">
                        Welcome to StockHive!
                    </p>
                    <p className="verify--text">
                        Verify your account to start tracking trades!
                    </p>
                    <SolidBtn 
                        title='Verify'
                        type='submit' 
                        onClick={handleSubmit}
                    />
                </div>   
            </div>
        </div>
     );
}