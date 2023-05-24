import React, { useState, useEffect } from "react";
import "./Layout.css";
import { Outlet, useLocation } from "react-router-dom";
import { Header, Footer } from './Components'


export default function Layout(props) {
  return (
    <div className="layout--container">
        <Header headerAuth={props.headerAuth}/>
        <div className="layout--content">
            <Outlet />
        </div>
        <Footer />
    </div>
  );
}
