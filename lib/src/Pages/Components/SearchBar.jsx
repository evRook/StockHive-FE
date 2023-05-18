import React, { useState } from 'react';
import './SearchBar.css'

export default function SearchBar() {

    const [search, setSearch] = useState('')

    const handleChange = (e) => {
        setSearch(e.target.value)
    }

    return ( 
        <input
            className='searchbar--input'
            type="text"
            placeholder="Search Company Ticker"
            onChange={handleChange}
            value={search} 
        />
     );
}
