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
            <NavBtn title='About'/>
            <NavBtn title='Contact'/>
            <NavBtn title='Profile'/>
            <NavBtn title='Info'/>
        </div>
        <div className="header--btn__container">
            <WireBtn title='Log in' />
            <SolidBtn title='Sign up'/>
        </div>
    </div>
  );
}