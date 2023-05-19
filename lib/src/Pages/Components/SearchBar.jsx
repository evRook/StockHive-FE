import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import './SearchBar.css'

export default function SearchBar() {
    const navigate = useNavigate()

    const [search, setSearch] = useState('')
    const [scope, setScope] = useState('')

    const handleChange = (e) => {
        setSearch(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        navigate('/profile', {state: {search: search, scope: scope}})
    }

    function handleRefresh(scope){
        setScope(scope)
        window.location.reload()
    }

    return ( 
        <form onSubmit={handleSubmit}>
            <input
            className='searchbar--input'
            type="text"
            placeholder="Search Company Ticker"
            onChange={handleChange}
            value={search} 
            required
            />
            <div className="searchbar--btn__container">
                <button className="searchbar--btn" type='submit' onClick={()=>{handleRefresh('1mo')}} required>1mo</button>
                <button className="searchbar--btn" type='submit' onClick={()=>{handleRefresh('3mo')}} required>3mo</button>
                <button className="searchbar--btn" type='submit' onClick={()=>{handleRefresh('6mo')}} required>6mo</button>
                <button className="searchbar--btn" type='submit' onClick={()=>{handleRefresh('1y')}} required>1y</button>
                <button className="searchbar--btn" type='submit' onClick={()=>{handleRefresh('max')}} required>max</button> 
            </div>
        </form>
     );
}
