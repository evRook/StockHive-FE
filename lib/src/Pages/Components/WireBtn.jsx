import React from 'react';
import './WireBtn.css'

export default function WireBtn(props) {
    return ( 
        <div className="wire--btn__container">
            <button className="wire--btn">
                {props.title}
            </button>
        </div>
     );
}