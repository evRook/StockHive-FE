import React from 'react';
import './TickerCard.css'


export default function TickerCard(props) {
    return ( 
        <div className="tickerCard--container">
            <p className="tickerCard--title">{props.symbol}</p>
            <div className="tickerCard--content">
                <div className="tickerCard--text">
                    <p className="tickerCard--high">{props.high}</p>
                    <p className="tickerCard--low">{props.low}</p>
                </div>
            </div>
        </div>
     );
}
