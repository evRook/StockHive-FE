import React, { useState, useEffect } from 'react';
import { FaRegHeart, FaHeart} from "react-icons/fa";
import './FavoriteBtn.css'

export default function FavoriteBtn(props) {
    const [heart, setHeart] = useState(<FaRegHeart />)
    const [favorite, setFavorite] = useState(false)

    function handleSubmit(){
        if(favorite === true){
            setHeart(<FaHeart />) 
        }else{
            setHeart(<FaRegHeart />)
        }

    }
    

    return (  
        <div className="favoritebtn--container">
            <button className='favoritebtn--btn' type='submit' onclick={props.onClick}>{heart}</button>
        </div>
    );
}