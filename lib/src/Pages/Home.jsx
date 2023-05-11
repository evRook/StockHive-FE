import React from "react";
import "./Home.css";
import { WireBtn, SolidBtn, NavBtn, Ticker } from './Components'
import { Link } from "react-router-dom";
import { useLoaderData } from "react-router-dom";



export default function Home(props) {
    const companyData = useLoaderData();
    console.log(companyData)

    return ( 
        <div className="home--container">
            <div className="home--header__container">
                <img src={require('./Components/img/hexagon.webp')} alt="" className="home--header--img"/>
                <div className="home--header--content">
                    <p className="home--header--text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?" 
                    </p>
                    <Link to="/about" className='header--link'>
                        <WireBtn title='About' />
                    </Link>
                </div>
            </div>
            <div className="home--ticker__container">
                <Ticker />
            </div>
            <div className="home--content__container">
                    
            </div>
        </div>
     );
}

