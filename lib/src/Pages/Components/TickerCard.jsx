import React, { useState } from 'react';
import './TickerCard.css'
import { HiOutlineChevronDoubleUp, HiOutlineChevronDoubleDown } from "react-icons/hi";


export default function TickerCard(props) {
    return ( 
        <div className="tickerCard--container">
            <p className="tickerCard--title">{props.symbol}</p>
            <div className="tickerCard--content">
                <div className="tickerCard--text">
                    <p className="tickerCard--high">{props.current}{props.arrow}</p>
                </div>
            </div>
        </div>
     );
}
