import React from "react";
import '../styles/Footer.scss';
import logo from "../images/logo.png";
// import { Button } from "./Button";
// import { Link } from "react-router-dom";

function Footer() {
    return (

        <footer className="footer-section">
            <div className="container">
                <div className="footer-cta pt-5 pb-5">
                    <div className="row">
                        <div className="col-xl-4 col-md-4 mb-30">
                            <div className="single-cta">
                                <i className="fas fa-map-marker-alt"></i>
                                <div className="cta-text">
                                    <h4>Find us</h4>
                                    <span>3370 32 Street NE, Calgary, AB, T1Y 6B9</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-md-4 mb-30">
                            <div className="single-cta">
                                <i className="fas fa-phone"></i>
                                <div className="cta-text">
                                    <h4>Call us</h4>
                                    <span>+1 (403) 800-1806</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-md-4 mb-30">
                            <div className="single-cta">
                                <i className="far fa-envelope-open"></i>
                                <div className="cta-text">
                                    <h4>Mail us</h4>
                                    <span>info@pairsauto.com</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-content pt-5 pb-5">
                    <div className="row">
                        <div className="col-xl-4 col-lg-4 mb-50">
                            <div className="footer-widget">
                                <div className="footer-logo">
                                    <a href="index.html"><img src={logo} className="img-fluid" alt="logo" /></a>
                                </div>
                                <div className="footer-text">
                                    <p>A one stop solution to your Auto Inspection, Repairs and Details.</p>
                                </div>
                                <div className="footer-social-icon">
                                    <span>Follow us :</span>
                                    <a href="https://www.facebook.com/PairsAuto" target="_blank" rel="noreferrer"><i className="fab fa-facebook fa-2x"></i></a>
                                    <a href="https://www.instagram.com/pairsauto/" target="_blank" rel="noreferrer"><i className="fab fa-instagram fa-2x"></i></a>
                                    <a href="https://www.youtube.com/channel/UCmhuM4ESgFY_5PXb8vFTbsw/featured" target="_blank" rel="noreferrer"><i className="fab fa-youtube fa-2x"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
                            <div className="footer-widget">
                                <div className="footer-widget-heading">
                                    <h3>Useful Links</h3>
                                </div>
                                <ul>
                                    <li><a href="/">Home</a></li>
                                    <li><a href="/">Services</a></li>
                                    <li><a href="/">Inventory</a></li>
                                    <li><a href="/">About</a></li>
                                    <li><a href="/">Contact</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-6 mb-50">
                            {/* <div className="footer-widget">
                                <div className="footer-widget-heading">
                                    <h3>Subscribe</h3>
                                </div>
                                <div className="footer-text mb-25">
                                    <p>Don’t miss to subscribe to our new feeds, kindly fill the form below.</p>
                                </div>
                                <div className="subscribe-form">
                                    <form action="#">
                                        <input type="text" placeholder="Email Address" />
                                        <button><i className="fab fa-telegram-plane"></i></button>
                                    </form>
                                </div>
                            </div> */}

                            <section className="footer-map ">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10025.58723631775!2d-113.9876!3d51.082684!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x5ace9b12ac2cac71!2sPairs%20Auto!5e0!3m2!1sen!2sin!4v1639397866376!5m2!1sen!2sin"
                                    width="100%"
                                    height="300"
                                    style={{ border: 0 }}
                                    allowFullScreen=""
                                    loading="lazy"
                                    title="location"
                                ></iframe>
                            </section>
                        </div>
                    </div>
                </div>
            </div>
            <div className="copyright-area">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 col-lg-6 text-center text-lg-left">
                            <div className="copyright-text">
                                <p>Copyright &copy; 2023, All Right Reserved </p>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 d-none d-lg-block text-right">
                            <div className="footer-menu">
                                <ul>
                                    <li><a href="/">Home</a></li>
                                    <li><a href="/">Services</a></li>
                                    <li><a href="/">Inventory</a></li>
                                    <li><a href="/">About</a></li>
                                    <li><a href="/">Contact</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;