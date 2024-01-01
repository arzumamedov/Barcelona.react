import React, { useEffect } from 'react'
import './section5.scss'
import AOS from 'aos';
import "aos/dist/aos.css"


function Section5() {

    useEffect(() => {
        AOS.init({
            duration: 3000, // Animation duration
            easing: 'ease-in-out', // Easing type
            // ... other options
        });
    }, []);
    return (
        <>
            <div className='section5'>
                <div data-aos="flip-right"
                    className='cupCard'>
                    <img src="https://amballcom.de/wp-content/uploads/2022/10/SF-RFEF-LIGA-150_Front_1000px.jpg" alt="" />
                    <h3>La Liga Cup <span>1929</span></h3>
                    <p>number of cups <span>27 times</span></p>
                </div>
                <div data-aos="flip-right"
                    className='cupCard'>
                    <img src="https://amballcom.de/wp-content/uploads/2016/10/UEFA-CL-150-002.jpg" alt="" />
                    <h3>Champions League<span>1992</span></h3>
                    <p>number of cups <span>5 times</span></p>
                </div>
                <div data-aos="flip-right"
                    className='cupCard'>
                    <img src="https://www.subbuteoworld.co.uk/media/catalog/product/cache/59299dd19568ac5f85c0aafe7f57574c/i/m/img_0824.jpg" alt="" />
                    <h3>Copa del Rey<span>1909</span></h3>
                    <p>number of cups <span>31 times</span></p>
                </div>
                <div data-aos="flip-right"
                    className='cupCard'>
                    <img src="https://amballcom.de/wp-content/uploads/2015/02/UEFA-SC-45_Front_1_1000px-600x600.jpg" alt="" />
                    <h3>European Super Cup<span>1992</span></h3>
                    <p>number of cups <span>5 times</span></p>
                </div>
            </div>
        </>
    )
}

export default Section5