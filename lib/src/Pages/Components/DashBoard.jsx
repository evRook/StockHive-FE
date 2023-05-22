import React, { useState, useEffect } from 'react';
import './DashBoard.css'
import axios from 'axios'
import { HiOutlineChevronDoubleUp, HiOutlineChevronDoubleDown } from "react-icons/hi";
import { useLocation } from "react-router-dom";
import { ChartComp, DoughnutComp, SearchBar, RadarComp } from './index'

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
            fiftyTwoWeekHigh: 0,
            fiftyTwoWeekLow: 0,
            overallRisk: 0,
        }
    ])
    const [priceArrow, setPriceArrow] = useState()
    const [key, setKey] = useState()
    const [uppercase, setUppercase] = useState()


    let chartComp = null

    useEffect(() => {
        axios.get(`http://localhost:8000/history/${search}/${scope}`)
            .then((response) => {
                setChart(response.data)
                
        
                // console.log(response.data)
            })
            .catch((error) => {
                console.log(error)
            })

        axios.get(`http://localhost:8000/company/${search}`)
            .then((response) => {
                setCompany(response.data)
                setUppercase(company[0].recommendationKey.toUpperCase())
                // console.log(response.data)
            })
            .catch((error) => {
                console.log(error)
            })
        
        if(company[0].currentPrice > company[0].regularMarketPreviousClose){
            setPriceArrow(<HiOutlineChevronDoubleUp style={{ color: '#3efe20' }}/>)
        }else{
            setPriceArrow(<HiOutlineChevronDoubleDown style={{ color: '#ff0000' }}/>)
        }

        setUppercase()
        

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
                    <p className="db--title--current">
                        ${company[0].currentPrice}{priceArrow}
                    </p>
                </div>
                <div className="db--header--search">
                    <SearchBar />
                </div>
            </div>
            <div className="db--content__container">
                <div className="db--companyInfo__container">
                    <div className="bd--companyInfo__subContainer">
                        <p className="db--companyInfo--title">
                            Previous Close:
                        </p>
                        <p className="db--companyInfo--text">
                            {company[0].regularMarketPreviousClose}
                        </p>
                    </div>
                    <hr className='db--companyInfo--hr'/>
                    <div className="bd--companyInfo__subContainer">
                        <p className="db--companyInfo--title">
                            Open:
                        </p>
                        <p className="db--companyInfo--text">
                            {company[0].regularMarketOpen}
                        </p>
                    </div>
                    <hr className='db--companyInfo--hr'/>
                    <div className="bd--companyInfo__subContainer">
                        <p className="db--companyInfo--title">
                            Day's Range:
                        </p>
                        <p className="db--companyInfo--text">
                            {company[0].regularMarketDayLow} - {company[0].regularMarketDayHigh}
                        </p>
                    </div>
                    <hr className='db--companyInfo--hr'/>
                    <div className="bd--companyInfo__subContainer">
                        <p className="db--companyInfo--title">
                            Volume:
                        </p>
                        <p className="db--companyInfo--text">
                            {company[0].volume}
                        </p>                        
                    </div>
                    <hr className='db--companyInfo--hr'/>
                    <div className="bd--companyInfo__subContainer">
                        <p className="db--companyInfo--title">
                            Avg. Volume:
                        </p>
                        <p className="db--companyInfo--text">
                            {company[0].averageVolume}
                        </p>
                    </div>
                    <hr className='db--companyInfo--hr'/>
                    <div className="bd--companyInfo__subContainer">
                        <p className="db--companyInfo--title">
                            Beta:
                        </p>
                        <p className="db--companyInfo--text">
                            {company[0].beta}
                        </p>
                    </div>
                    <hr className='db--companyInfo--hr'/>
                    <div className="bd--companyInfo__subContainer">
                        <p className="db--companyInfo--title">
                            Market Cap:
                        </p>
                        <p className="db--companyInfo--text">
                            {company[0].marketCap}
                        </p>
                    </div>
                    <hr className='db--companyInfo--hr'/>
                    <div className="bd--companyInfo__subContainer">
                        <p className="db--companyInfo--title">
                            Target:
                        </p>
                        <p className="db--companyInfo--text">
                            {company[0].targetMeanPrice}
                        </p>
                    </div>
                    <hr className='db--companyInfo--hr'/>
                    <div className="bd--companyInfo__subContainer">
                        <p className="db--companyInfo--title">
                            Forward Dividend(Yield):
                        </p>
                        <p className="db--companyInfo--text">
                            {company[0].dividendRate}({company[0].dividendYield}%)
                        </p>
                    </div>
                    <hr className='db--companyInfo--hr'/>
                    <div className="bd--companyInfo__subContainer">
                        <p className="db--companyInfo--title">
                            PE Ratio:
                        </p>
                        <p className="db--companyInfo--text">
                            {company[0].forwardPE}
                        </p>
                    </div>
                </div>
                <div className="db--chart__container">
                    <div className="db--line__container">
                        <ChartComp close={chart[0].Close} symbol={chart[0].symbol} />
                    </div>
                </div>
                <div className="db--center__container">
                    <div className="db--doghnut__container"  id='doughnut1'>
                        <DoughnutComp risk={company[0].overallRisk} limit={10}/>
                        <div className="db--doghnut--overlay">
                            <p className="db--doghnut--title">Overall Risk</p>
                            <div className="db--doughnut--rank">
                                <p>0</p>
                                <p>10</p>
                            </div>
                        </div>
                    </div>
                    <div className="db--doghnut__container" id='doughnut2'>
                        <DoughnutComp risk={company[0].recommendationMean} limit={5}/>
                        <div className="db--doghnut--overlay">
                            <p className="db--doghnut--title2">Analyst Recommendation</p>
                            <div className="db--doughnut--key">
                                <p>{company[0].recommendationKey}</p>
                            </div>
                            <div className="db--doughnut--rank">
                                <p>1</p>
                                <p>5</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="db--radar__container">
                    <div className="db--radar--title">
                        <p>Investor Risks</p>
                    </div>
                    <div className="db--radar">
                        <RadarComp 
                            audit={company[0].auditRisk}
                            compensation={company[0].compensationRisk}
                            board={company[0].boardRisk}
                            sh={company[0].shareHolderRightsRisk}
                        />
                    </div>
                </div>
            </div>
            <div className="db--info__container">
                <div className="db--info--content">
                </div>
                <div className="db--text__container">
                        <p className="db--text">
                            {company[0].longBusinessSummary}
                        </p>
                </div>
                <div className="db--yearstat__container">
                    <div className="db--yearstat--txt">
                        <p className="db--yearstat--title">52 Week</p>
                    </div>
                    <div className="db--yearstat">
                        <p className="db--yearstat--high">High<HiOutlineChevronDoubleUp style={{ color: '#3efe20' }}/> {company[0].fiftyTwoWeekHigh.toFixed(2)}</p>
                    </div>
                    <div className="db--yearstat">
                        <p className="db--yearstat--low">Low<HiOutlineChevronDoubleDown style={{ color: '#ff0000' }}/> {company[0].fiftyTwoWeekLow.toFixed(2)}</p>                             
                    </div>
                </div>
            </div>
        </div>
     );
}
