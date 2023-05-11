import React from 'react';
import './TickerCard.css'


export default function TickerCard(props) {
    return ( 
        <div className="tickerCard--container">
            <p className="tickerCard--title">{props.symbol}</p>
            <div className="tickerCard--content">
                <div className="tickerCard--text">
                    <p className="tickerCard--open">125.46{props.open}</p>
                    <p className="tickerCard--close">126.77{props.close}</p>
                </div>
                <div className="tickerCard--icon">
                    {/* gain or loss icon */}
                </div>
            </div>
        </div>
     );
}
