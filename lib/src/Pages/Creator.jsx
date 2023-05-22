import React from "react";
import "./Creator.css";

export default function Creator() {
    return ( 
        <div className="creator--container">
            <div className="creator--content__container">
                <div className="creator--content">
                    <div className="creator--title__container">
                        <p className="creator--title">evRook</p>
                        <img src={require('./Components/img/logo.png')} alt="" className="creator--img" />        
                    </div>
                    <div className="creator--text__container">
                        <p className="creator--text">
                            Hello Creator
                        </p>   
                    </div>
                </div>
                <div className="creator--img__container">
                </div>
            </div>
        </div>
     );
}