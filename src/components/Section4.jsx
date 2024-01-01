import React, { useEffect } from 'react'
import './section4.scss'
import AOS from 'aos';
import "aos/dist/aos.css"

function Section4() {
    useEffect(() => {
        AOS.init({
            duration: 1000, // Animation duration
            easing: 'ease-in-out', // Easing type
            // ... other options
        });
    }, []);
    return (
        <>
            <div className='section4'>
                <div data-aos="fade-up"
                    data-aos-anchor-placement="bottom-center" className='section4Top'>
                    <h3>Our Key Players</h3>
                </div>
                <div className='section4Bottom'>
                    <div className='player'>
                        <img width={200} src="https://media4.giphy.com/media/fTtT6vqWCXJRpzm4Tt/giphy.gif" alt="" />
                        <h5>Lionel Messi</h5>
                        <p>Attack - Right Winger</p>
                    </div>
                    <div className='player'>    
                        <img width={200} height={200} src="https://media0.giphy.com/media/XDdHF6aUo5fmLhQWh7/giphy.gif" alt="" />
                        <h5>Frenkie de Jong</h5>
                        <p>midfield - Central Midfield</p>
                    </div>
                    <div className='player'>
                        <img width={200} src="https://media2.giphy.com/media/hpd7irF4HKXP2rzCbb/giphy.gif" alt="" />
                        <h5>Luis Suárez</h5>
                        <p>Attack - Centre-Forward</p>
                    </div>
                    <div className='player'>
                        <img width={200} src="https://media0.giphy.com/media/UtKWebMP9awqZUXdMX/giphy.gif" alt="" />
                        <h5>Marc-André ter Stegen</h5>
                        <p>Goalkeeper</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Section4