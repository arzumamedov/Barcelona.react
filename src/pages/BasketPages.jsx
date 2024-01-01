import React, { useContext } from 'react'
import { BasketContext } from '../context/BasketContext'
import Navbar from '../layouts/Navbar'

function BasketPages() {
    const { basket } = useContext(BasketContext)
    return (
        <>
            <div className='section6Bottom'>
                {basket.map((item) => (
                    <div className='cards'>
                        <div className="blur"><button>Add To Card</button></div>
                        <div className='image'><img src={item.image} alt="" /></div>
                        <div className='name'>{item.name}</div>
                        <div className='price'>${item.price}</div>
                    </div>

                ))}
            </div>
        </>
    )
}

export default BasketPages