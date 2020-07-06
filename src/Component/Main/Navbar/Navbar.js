import React from 'react'
import logo from '../../../img/logo.svg'
import burger from '../../../img/burger.svg'
import {Link} from "react-router-dom";


//--------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------


const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="nav-center">
                <div className="nav-header">
                    <Link to={'/'}>
                        <img src={logo} alt="Beach Resort"/>
                    </Link>
                    <button type="button" className="nav-btn">
                        <img src={burger} alt="Burger"/>
                    </button>
                </div>

                <ul className="nav-links">
                    <li><Link to={'/'}> Home </Link></li>
                    <li><Link to={'/RoomList'}> Rooms </Link></li>
                </ul>
            </div>
        </nav>
    )
}


//--------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------


export default Navbar