import React, { useState, useEffect } from "react";
import "./Header.css";
import { WireBtn, SolidBtn, NavBtn, SearchBar } from './index'
import { Link, useLocation } from "react-router-dom";
import { LogOut } from '../../Utils/LogOut'


export default function Header(props) {
    const location = useLocation()
    const [isAuth, setIsAuth] = useState(location.state)
    const [resetKey, setResetKey] = useState(0)

    const logout = () => {
        console.log('clicked')
        window.localStorage.clear()
        setIsAuth(false)
        setResetKey((x)=> x+1)
    }

    useEffect(()=>{
        console.log('refreshed')
    }, [resetKey])

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
                                <NavBtn title='Profile'/>
                            </Link>
                        : null }
                    </div>
                    <div className="header--search__container">
                        <SearchBar />
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
                            <Link to="/about" className='header--link'>
                                <SolidBtn title='Log Out' onClick={LogOut}/>
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