import React from "react";
import "./Header.css";
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
    </div>
  );
}