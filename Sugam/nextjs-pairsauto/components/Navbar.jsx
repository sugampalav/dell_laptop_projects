import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

function Navbar() {
  const [click, setClick] = useState(false);
  //   const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <nav className="navbar-main">
        <div className="navbar-container">
          <div className="navbar-logo">
            <Link href="/" passHref>
              <a>
                <Image
                  className="img"
                  onClick={closeMobileMenu}
                  src="/assets/img/PairsAuto Logo Desktop.png"
                  alt="PairsAuto Logo"
                  layout="fill"
                ></Image>
              </a>
            </Link>
          </div>

          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-items">
              <Link href="/" className="nav-links" passHref>
                <a className="nav-links" onClick={closeMobileMenu}>
                  Home
                </a>
              </Link>
            </li>
            <li className="nav-items">
              <Link href="/Services" className="nav-links" passHref>
                <a className="nav-links" onClick={closeMobileMenu}>
                  Services
                </a>
              </Link>
            </li>
            <li className="nav-items">
              <Link href="/" className="nav-links" passHref>
                <a className="nav-links" onClick={closeMobileMenu}>
                  Inventory&nbsp;<i className="fas fa-warehouse"></i>
                </a>
              </Link>
            </li>
            <li className="nav-items">
              <Link href="/AboutUs" className="nav-links" passHref>
                <a className="nav-links" onClick={closeMobileMenu}>
                  About Us
                </a>
              </Link>
            </li>
            <li className="nav-items">
              <Link href="/ContactUs" className="nav-links" passHref>
                <a className="nav-links" onClick={closeMobileMenu}>
                  Contact Us
                </a>
              </Link>
            </li>
            <li className="nav-items">
              <p>
                <i className="fas fa-phone-alt"></i> : +1 (403) 800-1806
              </p>
            </li>
          </ul>
          {/* {button && (
            <Button buttonstyle="btn--outline">
              CarDeals4U&nbsp;<i className="fas fa-arrow-alt-circle-right"></i>
            </Button>
          )} */}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
