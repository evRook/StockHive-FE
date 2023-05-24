import React, { useState, useEffect } from "react";
import "./Header.css";
import { WireBtn, SolidBtn, NavBtn, SearchBar } from './index'
import { Link, useLocation } from "react-router-dom";


export default function Header(props) {
    const state = useLocation()
    const { auth } = state
    const [isAuth, setIsAuth] = useState(false)
    const [resetKey, setResetKey] = useState(0)

    const logout = () => {
        console.log('clicked')
        console.log(window.localStorage)
        window.localStorage.removeItem('user')
        setIsAuth(false)
        setResetKey((x)=> x+1)
    }

    // useEffect(() => {
    //     console.log('header refreshed')
    // }, [resetKey])

    // useEffect(() => {
    //     console.log('auth refreshed')
    //     setIsAuth(auth)
    // }, [auth])

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
                <div className="header--center__container">
                    <div className="header--nav__container">
                        <Link to="/about" className='header--link'>
                            <NavBtn title='About'/>
                        </Link>
                        <Link to="/contact" className='header--link'>
                            <NavBtn title='Contact'/>
                        </Link>
                        {isAuth ? 
                            <Link to="/profile" className='header--link'>
                                <NavBtn title='Dashboard'/>
                            </Link>
                        : null }
                    </div>
                    <div className="header--search__container">
                        {isAuth ? 
                           <SearchBar />
                        : null }
                    </div>
                </div>
                <div className="header--btn__container">
                    {isAuth ? 
                        null 
                    :
                        <Link to="/login" className='header--link'>
                            <WireBtn title='Log in' />
                        </Link>
                    }
                    {isAuth ? 
                        <Link to="/" className='header--link'>
                            <SolidBtn title='Log Out' onClick={logout}/>
                        </Link> 
                    :
                        <Link to="/signup" className='header--link'>
                            <SolidBtn title='Sign up'/>
                        </Link> 
                    }
                </div>
        </div>
    );
}