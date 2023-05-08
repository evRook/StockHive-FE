import React from "react";
import "./Footer.css";
import { WireBtn, SolidBtn, NavBtn } from './index'
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="footer--container">
        <div className="footer--content">
            <div className="footer--links__container">
                <div className="footer--nav__container">
                    <Link to="/" className='header--link'>
                        <NavBtn title='Product'/>
                    </Link> 
                    <Link to="/" className='header--link'>
                        <NavBtn title='Creator'/>
                    </Link> 
                    <Link to="/" className='header--link'>
                        <NavBtn title='Disclosures'/>
                    </Link>
                    <Link to="/about" className='header--link'>
                        <NavBtn title='About'/>
                    </Link>
                </div>
                <div className="footer--btn__container">
                    <Link to="/login" className='header--link'>
                        <WireBtn title='Log in' />
                    </Link>
                    <Link to="/signup" className='header--link'>
                        <SolidBtn title='Sign up'/>
                    </Link>
                </div>
            </div>
            <div className="footer--legal__container">
                <p className="footer--legal--title">Investing involves risk*</p>
                <p className="footer--legal--text">
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
                </p>
            </div>
        </div>
    </div>
  );
}