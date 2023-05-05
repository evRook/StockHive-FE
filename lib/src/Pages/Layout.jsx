import React from "react";
import "./Layout.css";
import { Outlet } from "react-router-dom";


export default function Layout() {
  
  return (
    <div className="layout--container">
        <p>Header test</p>
        <div className="layout--content">
            <Outlet />
        </div>
        <p>Footer test</p>
    </div>
  );
}
