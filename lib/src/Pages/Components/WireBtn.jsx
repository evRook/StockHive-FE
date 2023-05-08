import React from 'react';
import './WireBtn.css'

export default function WireBtn(props) {
    return ( 
        <div className="wire--container">
            <button className="wire--btn">
                {props.title}
            </button>
        </div>
     );
}