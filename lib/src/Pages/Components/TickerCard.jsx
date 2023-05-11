import React from 'react';
import './TickerCard.css'


export default function TickerCard(props) {
    return ( 
        <div className="tickerCard--container">
            <p className="tickerCard--title">{props.symbol}</p>
            <div className="tickerCard--content">
                <div className="tickerCard--text">
                    <p className="tickerCard--open">{props.high}</p>
                    <p className="tickerCard--close">{props.low}</p>
                </div>
                <div className="tickerCard--icon">
                    {/* gain or loss icon */}
                </div>
            </div>
        </div>
     );
}
