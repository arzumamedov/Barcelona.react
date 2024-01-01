import React from 'react'
import './navbar.scss'
import { Link } from 'react-router-dom'
function Navbar() {
  return (
    <>
      <nav>
        <div className='navLeft'>
          <img src="https://upload.wikimedia.org/wikipedia/en/thumb/4/47/FC_Barcelona_%28crest%29.svg/1200px-FC_Barcelona_%28crest%29.svg.png" alt="" />
          <h2>Barcelona</h2>
        </div>
        <div className='navRight'>
          <Link to={"/"}><h4>HOME</h4></Link>
          <h4>PAGES</h4>
          <h4>BLOG</h4>
          <h4>SHOP</h4>
          <h4>ELEMENTS</h4>
          <Link to={'/basket'}><i class="fa-solid fa-cart-shopping"></i></Link>
          <i class="fa-solid fa-magnifying-glass"></i>
          <i class="fa-solid fa-bars"></i>
        </div>
      </nav> 
    </>
  )
}

export default Navbar