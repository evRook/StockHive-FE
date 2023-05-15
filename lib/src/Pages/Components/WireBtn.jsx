import React from 'react';
import './WireBtn.css'

export default function WireBtn(props) {
    return ( 
        <div className="wire--btn__container">
            <button className="wire--btn" type={props.type} onClick={props.onClick}>
                {props.title}
            </button>
        </div>
     );
}