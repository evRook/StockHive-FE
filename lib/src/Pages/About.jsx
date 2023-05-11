import React from "react";
import "./About.css";
import { WireBtn, SolidBtn, NavBtn } from './Components'

export default function About() {
    return ( 
        <div className="about--container">
            <div className="about--content">
                <p className="about--title">About</p>
                <div className="about--text__container">
                    <p className="about--text">
                        StockHive is the perfect tool for investors looking to stay up-to-date on the latest market trends and track their investments with ease. Our app offers real-time stock quotes, market news, and personalized watchlists to help you make informed investment decisions.
                        <br/>
                        <br/>
                        With our user-friendly interface, you can easily search and add stocks to your watchlist, and receive customizable alerts for significant changes in stock prices or market indices. Our app also provides access to detailed stock charts and financial data, so you can conduct in-depth analysis of individual companies and industries.
                        <br/>
                        <br/>
                        Our team of expert analysts curates the latest financial news and analysis from reputable sources, so you can stay informed and ahead of the curve. We also offer educational resources and investment tips to help users of all experience levels navigate the complex world of stock investing.
                        <br/>
                        <br/>
                        At our core, we believe in empowering our users to make informed decisions about their investments, and we strive to provide the most accurate and up-to-date information possible. Whether you're a seasoned investor or just getting started, our stock tracking app is the perfect tool to help you achieve your financial goals.
                    </p>   
                </div>
            </div>
            <div className="about--img__container">

            </div>
        </div>
     );
}
