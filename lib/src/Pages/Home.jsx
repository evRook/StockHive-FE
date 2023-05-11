import React from "react";
import "./Home.css";
import { WireBtn, SolidBtn, NavBtn, Ticker } from './Components'
import { Link } from "react-router-dom";
import { useLoaderData } from "react-router-dom";



export default function Home(props) {
    const companyData = useLoaderData();
    console.log(companyData)

    return ( 
        <div className="home--container">
            <div className="home--header__container">
                <img src={require('./Components/img/hexagon.webp')} alt="" className="home--header--img"/>
                <div className="home--header--content">
                    <p className="home--header--text">
                        Introducing StockHive, your go-to source for monitoring your investments in the stock market. Our app provides real-time updates on stock prices and allows you to create a personalized watchlist of your favorite stocks, so you can stay informed and make informed decisions.
                        <br/>
                        <br/>
                        With StockHive, you'll be able to track the performance of individual stocks, as well as entire market indices, and receive alerts for significant changes. Our intuitive and user-friendly interface makes it easy for both novice and experienced investors to navigate and utilize StockHives features.
                    </p>
                    <Link to="/about" className='header--link'>
                        <WireBtn title='About' />
                    </Link>
                </div>
            </div>
            <div className="home--ticker__container">
                <Ticker />
            </div>
            <div className="home--content__container">
                    
            </div>
        </div>
     );
}

