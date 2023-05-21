import React from 'react';
import './SolidBtn.css'

export default function SolidBtn(props) {
    return ( 
        <div className="solid--btn__container"  >
            <button className="solid--btn" type={props.type} onClick={props.onClick}>
                {props.title}
            </button>
        </div>
     );
}