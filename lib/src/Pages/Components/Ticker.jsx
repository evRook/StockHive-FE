import React, { useState, useEffect } from 'react';
import './Ticker.css'
import { TickerCard } from './index'
import { HiOutlineChevronDoubleUp, HiOutlineChevronDoubleDown } from "react-icons/hi";


export default function Ticker({data}) {
    console.log(data)
    const tickerCards = []

    data.map((elem) => {
        if(elem[0].currentPrice > elem[0].regularMarketPreviousClose){
            return(
                tickerCards.push(
                    <TickerCard 
                        key={elem[0].symbol}
                        symbol={elem[0].symbol}
                        current={elem[0].currentPrice.toFixed(2)}
                        prev={elem[0].regularMarketPreviousClose}
                        arrow={<HiOutlineChevronDoubleUp style={{ color: '#3efe20' }}/>}
                    />
                )
            )
        }else{
            return(
                tickerCards.push(
                    <TickerCard 
                        key={elem[0].symbol}
                        symbol={elem[0].symbol}
                        current={elem[0].currentPrice.toFixed(2)}
                        prev={elem[0].regularMarketPreviousClose}
                        arrow={<HiOutlineChevronDoubleDown style={{ color: '#ff0000' }}/>}
                    />
                )
            )
        }
    })

    return ( 
        <div className="ticker--container">
            <div className="ticker--content">
                {tickerCards}
            </div>
        </div>
    );
}
