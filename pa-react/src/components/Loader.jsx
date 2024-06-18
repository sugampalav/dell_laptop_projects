import React from "react";


const Loader = () => {
    let carFacts = [
        "The average car contains over 30,000 unique parts",
        "It would take less than a month to get to the moon by car",
        "A modern Formula 1 car can drive upside down in a tunnel at 120mph",
        "The largest speeding fine ever produced was €1,000,000",
        "The world record for removing and replacing a car engine is 42 seconds",
        "The man who invented cruise control was blind",
        "The world's longest traffic jam occurred in China in 2010 and lasted for 12 days, stretching over 60 miles (97 km).", "The first car with seat belts was the 1959 Volvo 122.",
        "The first car with an automatic transmission was the 1940 Oldsmobile.", "The world's longest limousine is 100 feet (30.5 meters) long and has 26 wheels.",
        "Get ready to shift into gear!",
        "Buckle up, we're loading up your dream car.",
        "It's worth the wait for the perfect ride.",
        "Your car journey starts here.",
        "We're revving up to find you the perfect ride.",
        "Patience is a virtue, especially when it comes to finding the perfect car.",
        "Your dream car is just a loading screen away.",
        "Trust us, it's worth the wait for the perfect ride.",
        "Our team is working hard to get you behind the wheel of your dream car.",
        "Loading your perfect ride, please wait."
    ];
    let getCarFact = carFacts[Math.floor(Math.random() * carFacts.length)];
    return (
        <div className="loader">
            <span className="is-wrapped">
                &#8220;{getCarFact}&#8221;
            </span>
        </div>
    );
}

export default Loader;