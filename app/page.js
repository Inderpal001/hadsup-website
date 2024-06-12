import React from 'react'
import Banner from './Components/Banner/Banner'
import PopularLocations from './Components/PopularLocations/PopularLocations'
import About from './Components/AboutUs/About'
import Budget from './Components/Budget/Budget'
import TechnologyWorks from './Components/TechnologyWorks/TechnologyWorks'
import AI from './Components/AI/AI'
import Footer from './Components/Footer/Footer'

export default function page() {
  return (
    <>
      <Banner/>
      <PopularLocations/>
      <About/>
      <Budget/>
      <TechnologyWorks/>
      <AI/>
      <Footer/>
    </>
  )
}