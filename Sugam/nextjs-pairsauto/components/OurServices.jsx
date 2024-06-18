import React from "react";
import { Link } from "next/link";
import { Image } from "next/image";

function OurServices() {
  const services = [
    {
      src: "images/card-1.png",
      text: "Oil Change",
      description:
        "CONVENTIONAL OIL CHANGE. ( *Up to 5 Liter, after that $4 /Liter )",
      label: "Services",
      path: "/services",
    },
    {
      src: "images/acrecharge1.png",
      text: "AC Recharge",
      description: "AC RECHARGE r134a refrigerant - $2/Oz",
      label: "Services",
      path: "/services",
    },
    {
      src: "images/tirechange1.png",
      text: "Tire Change",
      description: "4 TIRE CHANGE (ANY SIZE - ON RIMS)",
      label: "Services",
      path: "/services",
    },
  ];

  const CardItem = (props) => {
    return (
      <>
        <li className="cards__item">
          <Link to={props.path} className="cards__item__link">
            <figure
              className="cards__item__pic-wrap"
              data-category={props.label}
            >
              <Image
                src={props.src}
                alt={props.text}
                className="cards__item__img"
              ></Image>
            </figure>
            <div className="cards__item__info">
              <h5 className="cards__item__text">{props.text}</h5>
              <p className="cards__item__description">{props.description}</p>
            </div>
          </Link>
        </li>
      </>
    );
  };

  return (
    <>
      <div className="cards">
        <h2 className="section-heading">Our Featured Services</h2>
        <div className="cards__container">
          <div className="cards__wrapper">
            <ul className="cards__items">
              <li className="cards__item">
                <Link href="/services" className="cards__item__link">
                  <a>
                    <figure
                      className="cards__item__pic-wrap"
                      data-category="Services"
                    >
                      <Image
                        src="/assets/img/card-1.png"
                        alt="Oil Change"
                        className="cards__item__img"
                        layout="fill"
                      />
                    </figure>
                    <div className="cards__item__info">
                      <h5 className="cards__item__text">Oil Change</h5>
                      <p className="cards__item__description">
                        CONVENTIONAL OIL CHANGE. ( *Up to 5 Liter, after that $4
                        /Liter )
                      </p>
                    </div>
                  </a>
                </Link>
              </li>
              <li className="cards__item">
                <Link href="/services" className="cards__item__link">
                  <a>
                    <figure
                      className="cards__item__pic-wrap"
                      data-category="Services"
                    >
                      <Image
                        src="/assets/img/acrecharge1.png"
                        alt="AC Recharge"
                        className="cards__item__img"
                        layout="fill"
                      ></Image>
                    </figure>
                    <div className="cards__item__info">
                      <h5 className="cards__item__text">AC Recharge</h5>
                      <p className="cards__item__description">
                        AC RECHARGE r134a refrigerant - $2/Oz
                      </p>
                    </div>
                  </a>
                </Link>
              </li>
              <li className="cards__item">
                <Link href="/services" className="cards__item__link">
                  <a>
                    <figure
                      className="cards__item__pic-wrap"
                      data-category="Services"
                    >
                      <Image
                        src="/assets/img/tirechange1.png"
                        alt="Tire Change"
                        className="cards__item__img"
                        layout="fill"
                      ></Image>
                    </figure>
                    <div className="cards__item__info">
                      <h5 className="cards__item__text">Tire Change</h5>
                      <p className="cards__item__description">
                        4 TIRE CHANGE (ANY SIZE - ON RIMS)
                      </p>
                    </div>
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default OurServices;
