import React, { useEffect, useState } from 'react'
import './section6.scss'
function Section6() {
  const [products, setProducts] = useState([])


  useEffect(() => {
    fetch("https://658989e6324d417152591b49.mockapi.io/api/products")
      .then((res) => res.json())
      .then((api) => setProducts(api))
  }, [])




  return (
    <>
      <div className='section6'>
        <div className='section6Top'>
          <p>Club Souvenirs</p>
        </div>
        <div className='section6Bottom'>
          {products.map((x) => (
            <div className='cards'>
              <div className="blur"><button>Add To Card</button></div>
              <div className='image'><img src={x.image} alt="" /></div>
              <div className='name'>{x.name}</div>
              <div className='price'>${x.price}</div>
            </div>

          ))}
        </div>
      </div>

    </>
  )
}

export default Section6