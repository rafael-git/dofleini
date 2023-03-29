import React from "react";
import { Link, Outlet } from "react-router-dom";

import './index.css';
import User from '../../assets/img/user-4.jpg';


const Header = (props) => {
    return (
        <div className='header-container'>
            <div className='options-container'>
                <div id='option-modwell' className='options'>
                    <Link to="/" className='modwell'>modwell</Link>
                </div>
                <div className='options'>marketplace</div>
                <div className='options'>inspiration</div>
            </div>
            <div className='options-container'>
                <div className='options'>
                <Link to='/dashboard' className='link'>My dashboards</Link>
                </div>
                <div className='options'>My Client</div>
                <div className='options'>My Listing</div> 
                <div className='options'>
                    My Moodboards
                </div>
                <div>
                    <Link to="/my-network" className='link'>My network</Link>
                </div>  
                <div>
                    <img src={User} alt="User" className="user-photo"/>
                    <span></span>
                </div>
            </div>

            <Outlet />
        </div>
    );
};

export default Header;