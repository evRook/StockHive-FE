import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import './SearchBar.css'

export default function SearchBar() {
    const navigate = useNavigate()

    const [search, setSearch] = useState('')
    const [prevSearch, setPrevSearch] = useState('')
    const [scope, setScope] = useState('')
    const [resetKey, setResetKey] = useState(0)

    const handleChange = (e) => {
        setSearch(e.target.value)
        setPrevSearch(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        navigate('/profile', {state: {search, scope}})
    }

    function handleRefresh(scope){
        setScope(scope)
        
        if(!search){
            setSearch(prevSearch)
        }
        console.log(search)
        console.log(prevSearch)
        setResetKey((x)=> x+1)
    }

    useEffect(()=>{
        console.log('search refresh')
    }, [resetKey])

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
