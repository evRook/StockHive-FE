import React from "react";
import "./Footer.css";
import { WireBtn, SolidBtn, NavBtn } from './index'
import { Link } from "react-router-dom";
import { FaGithubSquare, FaTwitterSquare, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="footer--container">
        <div className="footer--content">
            <div className="footer--links__container">
                <div className="footer--nav__container">
                    <Link to="/disclosures" className='header--link'>
                        <NavBtn title='Disclosures' onClick={()=>{window.scrollTo(0, 0)}}/>
                    </Link>
                    <Link to="/about" className='header--link'>
                        <NavBtn title='About' onClick={()=>{window.scrollTo(0, 0)}}/>
                    </Link>
                    <Link to="/contact" className='header--link'>
                        <NavBtn title='Contact' onClick={()=>{window.scrollTo(0, 0)}}/>
                    </Link> 
                </div>
                <div className="footer--lower__container">
                    <div className="footer--btn__container">
                        <Link to="/login" className='header--link'>
                            <WireBtn title='Log in' onClick={()=>{window.scrollTo(0, 0)}}/>
                        </Link>
                        <Link to="/signup" className='header--link'>
                            <SolidBtn title='Sign up' onClick={()=>{window.scrollTo(0, 0)}}/>
                        </Link>
                    </div>
                    <div className="footer--social__container">
                        <a href="https://github.com/evRook" className="footer--gh--link">
                            <FaGithubSquare style={{ color: '#333355', fontSize: '30px'}}/>
                        </a>
                        <a href="https://www.linkedin.com/in/ericspychalski/" className="footer--li--link">
                            <FaTwitterSquare style={{ color: '#333355', fontSize: '30px'}}/>
                        </a>
                        <a href="https://twitter.com/evRook_" className="footer--twitter--link">
                            <FaLinkedin style={{ color: '#333355', fontSize: '30px'}}/>
                        </a>
                    </div>
                </div>
            </div>
            <div className="footer--legal__container">
                <p className="footer--legal--title">Investing involves risk*</p>
                <p className="footer--legal--text">
                    Investing in the stock market involves inherent risks, and it is important to be aware of these risks before making any investment decisions. The value of stocks can rise or fall rapidly, and past performance is not a guarantee of future results. 
                    Investors should be aware that there is no guarantee of returns on their investment, and they may lose some or all of their invested capital. It is important to carefully consider your investment goals, financial situation, and risk tolerance before investing in stocks.
                    Stock prices can be influenced by a variety of factors, including market trends, company performance, global economic conditions, and political events. These factors can cause stock prices to fluctuate rapidly and unpredictably, which can result in significant gains or losses.
                    Investors should also be aware of the potential for fraud and insider trading in the stock market, and should carefully research any company before investing in its stock.
                    It is recommended that investors consult with a licensed financial advisor before making any investment decisions. They can help you understand the risks and potential rewards associated with investing in stocks, and create a personalized investment strategy that aligns with your goals and risk tolerance.
                </p>
            </div>
        </div>
    </div>
  );
}