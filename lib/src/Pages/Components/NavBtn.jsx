import React from 'react';
import './NavBtn.css'

export default function NavBtn(props) {
    return ( 
        <div className="nav--btn__container">
            <button className="nav--btn" onClick={props.onClick}>
                {props.title}
            </button>
        </div>
     );
}