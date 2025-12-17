import React from 'react'
import HomeSection from "./sections/home/index.jsx"
import AboutSection from "./sections/about/index.jsx"
import Navbar from '../../components/Navbar.jsx'

const index = () => {
  return (
    <div>
      <Navbar/>
      <HomeSection />
      <AboutSection />
    </div>
  )
}

export default index
