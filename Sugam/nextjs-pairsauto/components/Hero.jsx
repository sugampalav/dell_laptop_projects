import React from "react";
import Button from "../elements/Button";
import ScrollArrow from "../elements/ScrollArrow";

function Hero() {
  return (
    <>
      <div className="hero-container">
        <h1>
          We Make Car&nbsp;
          <br />
          Repairs Hassle Free
        </h1>
        <h2 className="hero-sub-header">What are you waiting for?</h2>
        <div className="hero-btns">
          <Button
            className="btns btn-shine"
            buttonstyle="btn--outline-reversed"
            buttonSize="btn--large"
          >
            Get Appointment&nbsp;<i className="far fa-address-book"></i>
          </Button>
        </div>
        <ScrollArrow />
      </div>
    </>
  );
}

export default Hero;
