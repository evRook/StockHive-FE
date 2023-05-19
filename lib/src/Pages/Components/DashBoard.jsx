import React, { useState, useEffect } from 'react';
import './DashBoard.css'
import axios from 'axios'
import { useLocation } from "react-router-dom";
import { ChartComp, DoughnutComp, SearchBar } from './index'

export default function DashBoard() {
    const { state } = useLocation()
    const { search, scope } = state || { search: 'aapl', scope: '1mo'}
    const [chart, setChart] = useState([
        {   
            symbol: 'Null',
            Close:[0, 0]
        }
    ])
    const [company, setCompany] = useState([
        {
            overallRisk: 0,
        }
    ])

    let chartComp = null

    useEffect(() => {
        axios.get(`http://localhost:8000/history/${search}/${scope}`)
            .then((response) => {
                setChart(response.data)
                console.log(response.data)
            })
            .catch((error) => {
                console.log(error)
            })

        axios.get(`http://localhost:8000/company/${search}`)
            .then((response) => {
                setCompany(response.data)
                console.log(response.data)
            })
            .catch((error) => {
                console.log(error)
            })

    }, [])

    return ( 
        <div className="db--container">
            <div className="db--header__container">
                <div className="db--title">
                    <p className="db--title--text">
                        {company[0].shortName}
                    </p>
                    <p className="db--title--ticker">
                        ({company[0].symbol})
                    </p>
                </div>
                <div className="db--header--search">
                    <SearchBar />
                </div>
            </div>
            <div className="db--content__container">
                <div className="db--chart__container">
                    <div className="db--line__container">
                        <ChartComp close={chart[0].Close} symbol={chart[0].symbol} />
                    </div>
                </div>
                <div className="db--center__container">
                    <div className="db--doghnut__container">
                        <DoughnutComp risk={company[0].overallRisk}/>
                        <div className="db--doghnut--overlay">
                            <p className="db--doghnut--title">Overall Risk</p>
                            <div className="db--doughnut--rank">
                                <p>0</p>
                                <p>10</p>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
            <div className="db--text__container">
                    <p className="db--text">
                        {company[0].longBusinessSummary}
                    </p>
            </div>
        </div>
     );
}
