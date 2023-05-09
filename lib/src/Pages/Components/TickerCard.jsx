import React from 'react';
import './TickerCard.css'

export default function TickerCard() {
    return ( 
        <div className="tickerCard--container">
            <p className="tickerCard--title">AAPL</p>
            <div className="tickerCard--content">
                <div className="tickerCard--text">
                    <p className="tickerCard--open">125.46</p>
                    <p className="tickerCard--close">126.77</p>
                </div>
                <div className="tickerCard--icon">
                    
                </div>
            </div>
        </div>
     );
}
