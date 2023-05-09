import React from 'react';
import './Ticker.css'
import { TickerCard } from './index'

export default function Ticker(props) {
    return ( 
        <div className="ticker--container">
            <div className="ticker--content">
                <TickerCard {...props}/>
            </div>
        </div>
    );
}
