import React from 'react';
import './SolidBtn.css'

export default function SolidBtn(props) {
    return ( 
        <div className="solid--btn__container" type={props.type} onClick={props.onClick}>
            <button className="solid--btn">
                {props.title}
            </button>
        </div>
     );
}