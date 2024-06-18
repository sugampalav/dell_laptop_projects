import React from "react";
import { Link } from "react-router-dom";

import OilChange from '../images/card-1.png';
import ACrecharge from '../images/acrecharge1.png';
import TireChange from '../images/tirechange1.png';


function CardItem(props) {
    return (
        <>
            <li className="cards__item">
                <Link to={props.path} className="cards__item__link">
                    <figure className="cards__item__pic-wrap" data-category={props.label}>
                        <img
                            src={props.src}
                            alt={props.text}
                            className="cards__item__img"
                        />
                    </figure>
                    <div className="cards__item__info">
                        <h5 className="cards__item__text">{props.text}</h5>
                        <p className="cards__item__description">{props.description}</p>
                    </div>
                </Link>
            </li>
        </>
    );
}

function FeaturedServices() {

    return (
        <div className="cards">
            <h2 className="section-heading">Featured Services</h2>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem
                            src={OilChange}
                            text="Oil Change"
                            description="CONVENTIONAL OIL CHANGE. ( *Up to 5 Liter, after that $4 /Liter )"
                            label="Services"
                            path="/services"
                        />

                        <CardItem
                            src={ACrecharge}
                            text="AC Recharge"
                            description="AC RECHARGE r134a refrigerant - $2/Oz"
                            label="Services"
                            path="/services"
                        />
                        <CardItem
                            src={TireChange}
                            text="Tire Change"
                            description="4 TIRE CHANGE (ANY SIZE - ON RIMS)"
                            label="Services"
                            path="/services"
                        />
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default FeaturedServices;
