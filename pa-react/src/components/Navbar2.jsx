import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from "../images/logo.png";

function Navbar2() {

    const [isNavOpen, setIsNavOpen] = useState(true);

    function toggleNav() {
        setIsNavOpen(!isNavOpen);
    }
    return (
        <>
            <nav>
                <div className="container">
                    <Link to="/" id="brand"><img src={logo} alt="logo" className='logo'></img></Link>
                    <button onClick={toggleNav}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>

                    <ul className={isNavOpen ? "navbar-menu" : "nav-open"}>
                        <li><Link to="/services">Services</Link></li>
                        <li><Link to="/inventory">Inventory</Link></li>
                        <li><Link to="/aboutus">About</Link></li>
                        <li><Link to="/contactus">Contact</Link></li>
                        <li>+1 (403) 800-1806</li>
                    </ul>

                </div>
            </nav>
        </>
    )
}

export default Navbar2