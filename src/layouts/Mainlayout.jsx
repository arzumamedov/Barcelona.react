import React from 'react'
import { Outlet } from 'react-router-dom'
import Slider from '../components/Slider'
import Footer from './Footer'

function Mainlayout() {
    return (
        <>
            <Slider />
            <Outlet />
            <Footer />
        </>
    )
}

export default Mainlayout