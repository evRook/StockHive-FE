import React from 'react';
import './Ticker.css'
import { TickerCard } from './index'

export default function Ticker() {
    return ( 
        <div className="ticker--container">
            <div className="ticker--content">
                <TickerCard />
                <TickerCard />
                <TickerCard />
                <TickerCard />
                <TickerCard />
                <TickerCard />
                <TickerCard />
                <TickerCard />
                <TickerCard />
                <TickerCard />
                <TickerCard />
                <TickerCard />
                <TickerCard />
            </div>
        </div>
    );
}
