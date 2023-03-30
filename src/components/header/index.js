import React from "react";
import { Link } from "react-router-dom";

import './index.css';
import User from '../../assets/img/user-4.jpg';
import { useRef } from "react";


const Header = (props) => {

    const menuRef = useRef();

    const toggleMenu = () =>{
        menuRef.current.classList.toggle('hide');
    };
  
    const navLink = document.querySelectorAll('.link');
    navLink.forEach(navLinkEl => {
        navLinkEl.addEventListener('click', () => {
            document.querySelector('.active')?.classList.remove('active');
            navLinkEl.classList.add('active');
        });
        
    });

    console.log(window.location);
    console.log(window.location.pathname === '/dashboard')
        
    return (
        <>
        <div className='header-container'>
            <div className='logo-container'>
                <div id='option-modwell' className='options'>
                    <Link to="/" className='modwell'>modwell</Link>
                </div>
               
            </div>
            <div className='options-container'>
                <div style={{display: 'flex'}}>
                    <div className='options'>
                        <Link to='/dashboard' className='link'>marketplace</Link>
                    </div>
                    <div className='options'>
                        <Link to='/dashboard' className='link'>inspiration</Link>
                    </div>
                </div>
                <div style={{display: 'flex'}}>
                    <div className='options'>
                        <Link to='/dashboard' className='link'>My dashboards</Link>
                    </div>
                    <div className='options'>
                        <Link to='/dashboard' className='link'>My Client</Link>
                    </div>
                    <div className='options'>
                        <Link to='/dashboard' className='link'>My Listing</Link>
                     </div> 
                    <div className='options'>
                        <Link to='/dashboard' className='link'>My Moodboards</Link>
                    </div>
                    <div className="options">
                        <Link to="/my-network" className='link'>My network</Link>
                    </div>  
                    <div>
                        <img src={User} alt="User" className="user-photo"/>
                        <span></span>
                    </div>
                </div>
            </div>
            <div  className='two-left-elements'>
                <div onClick={()=> toggleMenu()} className='hamburger'>
                    <div className='line'></div>
                    <div className='line'></div>
                    <div className='line'></div>
                </div> 
                <div>
                    <img src={User} alt="User" className="user-photo"/>
                    <span></span>
                </div>
            </div>
            
        </div>

            <div ref={menuRef} className='resp-menu hide'>
                <div className='options'>marketplace</div>
                <div className='options'>inspiration</div>
                <div className='options'>
                    <Link onClick={()=>toggleMenu()} to='/dashboard' className='link'>My dashboards</Link>
                </div>
                <div className='options'>My Client</div>
                <div className='options'>My Listing</div> 
                <div className='options'>My Moodboards</div>
                <div className="options">
                    <Link onClick={()=>toggleMenu()} to="/my-network" className='link'>My network</Link>
                </div>
            </div>
        </>
    );
};

export default Header;