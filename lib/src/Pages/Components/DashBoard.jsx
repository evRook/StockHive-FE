import React, { useState, useEffect } from 'react';
import './DashBoard.css'
import axios from 'axios'
import { ChartComp } from './index'

export default function DashBoard() {
    const [chart, setChart] = useState([
        {   
            symbol: 'Null',
            Close:[0, 0]
        }
    ])

    useEffect(() => {
        axios.get('http://localhost:8000/history/aapl/1mo')
            .then((response) => {
                setChart(response.data)
                console.log(response.data)
            })
            .catch((error) => {
                console.log(error)
            })
    }, [])
  
    return ( 
        <div className="db--container">
            <div className="db--chart__container">
                <ChartComp close={chart[0].Close} symbol={chart[0].symbol} />
            </div> 
        </div>
     );
}
