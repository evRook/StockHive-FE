import React from "react";
import "./Header.css";
import { WireBtn, SolidBtn, NavBtn } from './index'
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="header--container">
        <div className="header--content">
            <Link to="/" className="header--logo__link">
                <div className="header--logo__container">
                    <img src={require('./img/logo.png')} alt="" className="header--logo" />
                </div>
                <p className="header--logo--title">StockHive</p>
            </Link>
        </div>
        <div className="header--nav__container">
            <Link to="/about" className='header--link'>
                <NavBtn title='About'/>
            </Link>
            <Link to="/" className='header--link'>
                <NavBtn title='Contact'/>
            </Link>
            <Link to="/" className='header--link'>
                <NavBtn title='Profile'/>
            </Link>
            <Link to="/" className='header--link'>
                <NavBtn title='Info'/>
            </Link>
        </div>
        <div className="header--btn__container">
            <Link to="/login" className='header--link'>
                <WireBtn title='Log in' />
            </Link>
            <Link to="/signup" className='header--link'>
                <SolidBtn title='Sign up'/>
            </Link>
        </div>
    </div>
  );
}