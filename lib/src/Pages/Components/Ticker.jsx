import React, { useState, useEffect } from 'react';
import './Ticker.css'
import { TickerCard } from './index'

export default function Ticker(props) {
    const tickerCards = []

    props.data.map((elem) => {
        return(
            tickerCards.push(
                <TickerCard 
                    key={elem[0].symbol}
                    symbol={elem[0].symbol}
                    high={elem[0].dayHigh.toFixed(2)}
                    low={elem[0].dayLow.toFixed(2)}
                />
            )
        )
    })

    return ( 
        <div className="ticker--container">
            <div className="ticker--content">
                {tickerCards}
            </div>
        </div>
    );
}
