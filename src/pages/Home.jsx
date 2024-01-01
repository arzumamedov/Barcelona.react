import React from 'react'
import Slider from '../components/Slider'
import ReviewOfTheSeason from '../components/ReviewOfTheSeason'
import Section2 from '../components/Section2'
import Section3 from '../components/Section3'
import Section4 from '../components/Section4'
import Section5 from '../components/Section5'
import CounterUp from '../components/CounterUp'
import Section6 from '../components/Section6'
import Footer from '../layouts/Footer'

function Home() {
    return (
        <>
            {/* <Slider /> */}
            <ReviewOfTheSeason />
            <Section2 />
            <Section3 />
            <Section4 />
            <Section5 />
            <CounterUp />
            <Section6 />
            {/* <Footer/> */}
        </>
    )
}

export default Home