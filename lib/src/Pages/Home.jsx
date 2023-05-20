import React from "react";
import "./Home.css";
import { WireBtn, SolidBtn, NavBtn, Ticker, SearchBar, ChartHome } from './Components'
import { Link } from "react-router-dom";
import { useLoaderData } from "react-router-dom";



export default function Home(props) {
    const companyData = useLoaderData();
    console.log(companyData)

    return ( 
        <div className="home--container">
            <div className="home--ticker__container">
                {/* <Ticker data={companyData}/> */}
            </div>
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
                <div className="home--content4">
                    <div className="home--content4--img">
                        <img src={require('./Components/img/hans-eiskonen-wn57cSQ7VzI-unsplash.png')} alt="" />
                    </div>
                    <div className="home--content4--text">
                        <p></p>
                    </div>
                </div>
            </div>
        </div>
     );
}

