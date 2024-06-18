import React from 'react'
import logo from "../images/logo.svg";
import menu from "../images/menu.svg";


function Navbar() {
    return (
        <>
            <nav className='navbar'>
                <img onClick={document.body.classList.toggle('open')} className="burger" src={menu} alt='menu'></img>
                <img src={logo} alt='logo'></img>
                <div className='menu-items'>
                    <div className='menu menu-left'>
                        <a href='/'>Pulls</a>
                        <a href='/'>Issues</a>
                        <a href='/'>Explore</a>
                    </div>
                </div>
                <div className='menu menu-right'>
                    <span className='number'>+91 9876543210</span>
                </div>
            </nav>

        </>
    )
}

export default Navbar