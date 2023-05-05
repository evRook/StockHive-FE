import React from "react";
import "./Layout.css";
import { Outlet } from "react-router-dom";
import { Header, Footer } from './Components'


export default function Layout() {
  
  return (
    <div className="layout--container">
        <Header />
        <div className="layout--content">
            <Outlet />
        </div>
        <Footer />
    </div>
  );
}
