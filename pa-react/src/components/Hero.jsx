import React from "react";
import ScrollArrow from "./ScrollArrow";

function Hero() {
    return (
        <div className="hero-container">
            {/* <video src="/videos/video-3.mp4" autoPlay muted></video> */}
            <h1>
                We Make Car&nbsp;
                <br />
                Repairs Hassle Free
            </h1>
            {/* <h1>a one stop shop to your auto inspection, repairs &amp; details</h1> */}
            <p>What are you waiting for?</p>

            <ScrollArrow />
        </div>
    );
}

export default Hero;
