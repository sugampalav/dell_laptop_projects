import React from 'react'
import FeaturedServices from '../components/FeaturedServices'
import Gallery from '../components/Gallery'
import Hero from '../components/Hero'
import HomeContent from '../components/HomeContent'

function Home() {
    return (
        <>
            <Hero />
            <HomeContent />
            <FeaturedServices />
            <Gallery />
        </>
    )
}

export default Home