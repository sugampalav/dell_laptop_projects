import React from 'react'

function HomeContent() {
    return (
        <>
            <div className="home-content" id="home-content">
                <div className="home-content-container">
                    <div className="home-content-wrapper">
                        <h2>
                            we have 10+ years of
                            <br /> service experience for you
                        </h2>
                        <p>
                            Since the year 2010 we are always ready to give you one of the
                            best services. With a team of reliable mechanics, we are aiming to
                            provide the best auto services at an affordable price to our
                            customers.
                        </p>
                    </div>
                    <div className="highlight-wrapper">
                        <ul className="highlight">
                            <li className="highlight-items">customer satisfaction</li>
                            <li className="highlight-items">latest &amp; modern shop</li>
                            <li className="highlight-items">expertise diagnostics</li>
                            <li className="highlight-items">fair pricing</li>
                            <li className="highlight-items">expert care</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomeContent