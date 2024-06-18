import React from "react";

import Carousel from "react-bootstrap/Carousel";


import OilChange1 from '../images/card-1.png';
import OilChange2 from '../images/oilchange2.png';
import OilChange3 from '../images/oilchange3.png';

import ACrecharge1 from '../images/acrecharge1.png';

import TireChange1 from '../images/tirechange1.png';
import TireChange2 from '../images/tirechange2.png';

import MechRep1 from '../images/mechrepair1.png';
import MechRep2 from '../images/mechrepair2.png';
import MechRep3 from '../images/mechrepair3.png';

import Wind1 from '../images/windshield1.png';
import Wind2 from '../images/windshield2.png';
import Wind3 from '../images/windshield3.png';

import CarDet1 from '../images/cardet1.png';
import CarDet2 from '../images/cardet2.png';
import CarDet3 from '../images/cardet3.png';

import Wheel1 from '../images/wheel1.png';
import Wheel2 from '../images/wheel2.png';
import Wheel3 from '../images/wheel3.png';

function Services() {

    return (
        <div className="service-container">
            <h1>Services At PairsAUTO</h1>
            <div className="service-wrapper">
                {/* <Link to="/contact-us" target="_blank" className="section-link"> */}
                <div className="section">
                    <Carousel>
                        <Carousel.Item>
                            <img
                                className="d-block w-100 img-card img-fluid"
                                src={OilChange1}
                                alt="oil change 1"
                            ></img>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100 img-card img-fluid"
                                src={OilChange2}
                                alt="oil change 2"
                            ></img>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100 img-card img-fluid"
                                src={OilChange3}
                                alt="oil change 3"
                            ></img>
                        </Carousel.Item>
                    </Carousel>
                    <div className="details">
                        <h2>Oil Change</h2>
                        <ul>
                            <li className="bullet">
                                <b>$39</b> - CONVENTIONAL OIL CHANGE. ( *Up to 5 Liter, after
                                that $4 /Liter )
                            </li>
                            <li className="bullet">
                                <b>$65</b> - FULL SYNTHETIC OIL CHANGE. ( *Up to 5 Liter,
                                after that $8 /Liter )
                            </li>
                            <li className="bullet">
                                <b>$79</b> - GERMAN CARS - FULL SYNTHETIC OIL CHANGE + PREMIUM
                                OIL FILTER. ( *Oil up to 5 Liter, after that $4 /Liter )
                            </li>
                        </ul>
                    </div>
                </div>
                {/* </Link> */}
                {/* <Link to="/contact-us" target="_blank" className="section-link"> */}
                <div className="section">
                    <Carousel>
                        <Carousel.Item>
                            <img
                                className="d-block w-100 img-card img-fluid"
                                src={ACrecharge1}
                                alt="AC Recharge 1"
                            ></img>
                        </Carousel.Item>
                    </Carousel>
                    <div className="details">
                        <h2>AC Recharge</h2>
                        <ul>
                            <li className="bullet">
                                <b>$79</b> - AC RECHARGE r134a refrigerant - $2/Oz
                            </li>
                        </ul>
                    </div>
                </div>
                {/* </Link> */}

                {/* <Link to="/contact-us" target="_blank" className="section-link"> */}
                <div className="section">
                    <Carousel>
                        <Carousel.Item>
                            <img
                                className="d-block w-100 img-card img-fluid"
                                src={TireChange1}
                                alt="Tire Change 1"
                            ></img>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100 img-card img-fluid"
                                src={TireChange2}
                                alt="Tire Change 2"
                            ></img>
                        </Carousel.Item>
                    </Carousel>
                    <div className="details">
                        <h2>Tire Change</h2>
                        <ul>
                            <li className="bullet">
                                <b>$39</b> - 4 TIRE CHANGE (ANY SIZE - ON RIMS)
                            </li>
                            <li className="bullet">
                                <b>$39</b> - 4 TIRE CHANGE (14inch TO 16inch - OFF RIMS)
                            </li>
                            <li className="bullet">
                                <b>$49</b> - 4 TIRE CHANGE (17inch TO 18inch - OFF RIMS)
                            </li>
                            <li className="bullet">
                                <b>$59</b> - 4 TIRE CHANGE (19inch TO 20inch - OFF RIMS)
                            </li>
                            <li className="bullet">
                                <b>$20</b> - FLAT TIRE REPAIR
                            </li>
                        </ul>
                    </div>
                </div>
                {/* </Link> */}

                {/* <Link to="/contact-us" target="_blank" className="section-link"> */}
                <div className="section">
                    <Carousel>
                        <Carousel.Item>
                            <img
                                className="d-block w-100 img-card img-fluid"
                                src={MechRep1}
                                alt="Mechanical Repairs 1"
                            ></img>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100 img-card img-fluid"
                                src={MechRep2}
                                alt="Mechanical Repairs 2"
                            ></img>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100 img-card img-fluid"
                                src={MechRep3}
                                alt="Mechanical Repairs 3"
                            ></img>
                        </Carousel.Item>
                    </Carousel>
                    <div className="details">
                        <h2>Mechanical Repairs</h2>
                        <ul>
                            <li className="bullet">Brake change</li>
                            <li className="bullet">Engine bay checks</li>
                            <li className="bullet">
                                Check level and refill brake fluid/clutch fluid
                            </li>
                            <li className="bullet">Grease and lubricate components</li>
                            <li className="bullet">
                                Best facilities for all car repair needs.
                            </li>
                        </ul>
                    </div>
                </div>
                {/* </Link> */}

                {/* <Link to="/contact-us" target="_blank" className="section-link"> */}
                <div className="section">
                    <Carousel>
                        <Carousel.Item>
                            <img
                                className="d-block w-100 img-card img-fluid"
                                src={Wind1}
                                alt="Windshield Replacement"
                            ></img>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100 img-card img-fluid"
                                src={Wind2}
                                alt="Windshield Replacement"
                            ></img>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100 img-card img-fluid"
                                src={Wind3}
                                alt="Windshield Replacement"
                            ></img>
                        </Carousel.Item>
                    </Carousel>
                    <div className="details">
                        <h2>Windshield Replacement</h2>
                        <ul>
                            <li className="bullet">Windshield Replacement</li>
                        </ul>
                    </div>
                </div>
                {/* </Link> */}

                {/* <Link to="/contact-us" target="_blank" className="section-link"> */}
                <div className="section">
                    <Carousel>
                        <Carousel.Item>
                            <img
                                className="d-block w-100 img-card img-fluid"
                                src={CarDet1}
                                alt="Car Detailing 1"
                            ></img>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100 img-card img-fluid"
                                src={CarDet2}
                                alt="Car Detailing 2"
                            ></img>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100 img-card img-fluid"
                                src={CarDet3}
                                alt="Car Detailing 3"
                            ></img>
                        </Carousel.Item>
                    </Carousel>
                    <div className="details">
                        <h2>Car Detailing</h2>
                        <ul>
                            <li className="bullet">$80 - BRONZE PACKAGE</li>
                            <li className="bullet">$150 - SILVER PACKAGE</li>
                            <li className="bullet">$200 - GOLD PACKAGE</li>
                            <li className="bullet">$380 - PLATINUM PACKAGE</li>
                            <li className="bullet">$60 - INTERIOR CLEAN</li>
                            <li className="bullet">$30 - EXTERIOR CLEAN</li>
                            <li className="bullet">OPTIONAL ADD ONs</li>
                        </ul>
                    </div>
                </div>
                {/* </Link> */}

                {/* <Link to="/contact-us" target="_blank" className="section-link"> */}
                <div className="section">
                    <Carousel>
                        <Carousel.Item>
                            <img
                                className="d-block w-100 img-card img-fluid"
                                src={Wheel1}
                                alt="Wheel Alignment 1"
                            ></img>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100 img-card img-fluid"
                                src={Wheel2}
                                alt="Wheel Alignment 2"
                            ></img>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100 img-card img-fluid"
                                src={Wheel3}
                                alt="Wheel Alignment 3"
                            ></img>
                        </Carousel.Item>
                    </Carousel>
                    <div className="details">
                        <h2>Wheel Alignment</h2>
                        <ul>
                            <li className="bullet">
                                <b>$109</b> - WHEEL ALIGNMENT
                            </li>
                        </ul>
                    </div>
                </div>
                {/* </Link> */}
            </div>
        </div>
    );
}

export default Services;
