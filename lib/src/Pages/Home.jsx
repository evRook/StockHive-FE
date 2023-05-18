import React from "react";
import "./Home.css";
import { WireBtn, SolidBtn, NavBtn, Ticker, SearchBar } from './Components'
import { Link } from "react-router-dom";
import { useLoaderData } from "react-router-dom";



export default function Home(props) {
    const companyData = useLoaderData();
    console.log(companyData)

    return ( 
        <div className="home--container">
            <div className="home--header__container">
                <div className="home--header--content">
                    <p className="home--header--text">
                        StockHive 
                        <br/>
                        <br/>
                        Your go-to source for monitoring your investments in the stock market. Our app provides real-time updates on stock prices and allows you to create a personalized watchlist of your favorite stocks, so you can stay informed and make informed decisions.
                    </p>
                    <Link to="/about" className='header--link'>
                        <WireBtn title='About' />
                    </Link>
                </div>
                <div className="home--ticker__container">
                        <Ticker data={companyData}/>
                </div>
            </div>
            
            <div className="home--content__container">
                    
            </div>
        </div>
     );
}

