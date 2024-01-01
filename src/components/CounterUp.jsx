import React, { useState } from 'react'
import './counterUp.scss'
import CountUp from 'react-countup'
import ScrollTrigger from 'react-scroll-trigger';
function CounterUp() {
    const [countUP, setCountUP] = useState(false);
  return (
    <>
    <ScrollTrigger onEnter={()=>setCountUP(true)} onExit={()=>setCountUP(false)}>
    <div className='counterUp'>
        <div className='count'>
        <i class="fa-solid fa-gamepad"></i>
            {countUP&& <h1><CountUp start={0} end={237} duration={4} delay={1}/></h1>}
            <h3>La Liga Cup Games</h3>
            </div>
        <div className='count'>
        <i className="fa-solid fa-fire"></i>
            {countUP&& <h1><CountUp start={0} end={106} duration={6} delay={1}/></h1>}
            <h3>International Games</h3>
        </div>
        <div className='count'>
        <i className="fa-solid fa-trophy"></i>
            {countUP&& <h1><CountUp start={0} end={14} duration={6} delay={1}/></h1>}
            <h3>Trophies Won</h3>
        </div>
        <div className='count'>
        <i className="fa-solid fa-shirt"></i>
            {countUP&& <h1><CountUp start={0} end={1997} duration={6} delay={1}/></h1>}
            <h3>Registered Fans</h3>
        </div>
    </div>
    </ScrollTrigger>

    </>
  )
}

export default CounterUp