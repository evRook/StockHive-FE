import React, { useState, useEffect } from 'react';
import { FaRegHeart, FaHeart} from "react-icons/fa";
import './FavoriteBtn.css'
import axios from 'axios'
import Cookies from 'js-cookie';

export default function FavoriteBtn(props) {
    const [heart, setHeart] = useState(<FaRegHeart />)
    const [favorite, setFavorite] = useState(false)
    const [userId, setUserId] = useState()

    const handleClick = async () => {
        if(favorite === true){
            setFavorite(false)
            setHeart(<FaHeart />) 
        }else{
            setFavorite(true)
            setHeart(<FaRegHeart />)
        }

        const data = {
            'symbol': props.symbol,
            'shortName': props.shortName
        }

        const csrfToken = Cookies.get('csrftoken')

        const headers = {
            headers: {
                'Content-Type': 'application/json',
                'X-CSRFToken': csrfToken,
            }
        }

        const dataStr = JSON.stringify(data)
        const pkString = props.pk.toString()

        await axios.post(`http://localhost:8000/users/favorites/${pkString}/create`, dataStr, headers)
            .then((response) => {
                console.log(response)
            })
            .catch((error) => {
                console.log(error)
            })

    }
    

    return (  
        <div className="favoritebtn--container">
            <button className='favoritebtn--btn' type='submit' onClick={handleClick}>{heart}</button>
        </div>
    );
}