import React, { useState, useEffect } from "react";
import "./Home.css";
import axios from 'axios'
import { WireBtn, SolidBtn, NavBtn, Ticker, SearchBar, ChartHome } from './Components'
import { Link } from "react-router-dom";
import { useLoaderData } from "react-router-dom";



export default function Home(props) {
    const companyData = useLoaderData();
    const [tickers, setTickers] = useState([])
    const ticks = ['aapl', 'msft', 'tsla', 'meta', 'amzn' ]
    let chartArr = []
    let tickerArr = []

    useEffect(() => {
        axios.get(`http://localhost:8000/ticker`)
            .then((response) => {
                setTickers(response.data)
            })
            .catch((error) => {
                console.log(error)
            })
    }, [])

    // useEffect(() => {
    //     for(let i=0; i<ticks.length; i++){
    //         axios.get(`http://localhost:8000/history/${ticks[i]}/1y`)
    //         .then((response) => {
    //             chartArr.push(response.data)
    //         })
    //         .catch((error) => {
    //             console.log(error)
    //         })
    //     }
    // }, [])
    
    // useEffect(() => {
    //     console.log(chartArr)
    // }, [chartArr])

    return ( 
        <div className="home--container">
            <div className="home--header__container">  
                <div className="home--header--content">
                    <p className="home--header--title">
                        StockHive 
                    </p>
                    <p className="home--header--text">
                        Find Clarity in Investing
                    </p>
                </div>
                <img src={require('./Components/img/logo.png')} alt="" className='home--header--img'/>
            </div>
            
            <div className="home--content__container">
                <div className="home--content1">
                    <p className="home--header--text">
                        Your go-to source for monitoring your investments in the stock market. Our app provides real-time updates on stock prices and allows you to create a personalized watchlist of your favorite stocks, so you can stay informed and make informed decisions.
                    </p>
                    <Link to="/about" className='header--link'>
                        <WireBtn title='About' />
                    </Link>
                </div>
                <div className="home--content2">
                    <div className="home--content2--chart">
                        <ChartHome chartData={companyData} />
                    </div> 
                </div>
                <div className="home--content3">
                    <div className="home--content3--text">
                        <p>investors can easily track and analyze the growth of their portfolios, empowering them to make informed investment decisions and maximize their financial returns.</p>
                    </div>
                </div>
                <div className="home--ticker__container">
                    <Ticker data={tickers}/>
                </div>
                <div className="home--content4">
                    <div className="home--content4--img">
                        <img src={require('./Components/img/hans-eiskonen-wn57cSQ7VzI-unsplash.png')} alt="" />
                    </div>
                    <div className="home--content4--text__container">
                        <div className="home--content4--content">
                            <p className="home--content4--text">Join The Hive</p>
                            <Link to="/signup" className='header--link'>
                                <SolidBtn title='Sign Up' />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}

