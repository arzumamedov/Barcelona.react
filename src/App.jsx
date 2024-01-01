import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Slider from './components/Slider'
import Footer from './layouts/Footer'
import Mainlayout from './layouts/Mainlayout'
import BasketPages from './pages/BasketPages'
import Home from './pages/Home'

function App() {

  return (
    <>
      {/* <Slider />
      <ReviewOfTheSeason />
      <Section2 />
      <Section3/>
      <Section4/>
      <Section5/>
      <CounterUp/>
      <Section6/>
      <Footer/> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Mainlayout />}>
            <Route path='/' element={<Home />} />
            <Route path='/basket' element={<BasketPages />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>

  )
}

export default App