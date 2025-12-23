// @import dependencies
import React from 'react'
import { Outlet } from 'react-router'

// @import components
import Navbar from '../../components/layout/navbar/Navbar.jsx'
import Footer from '../../components/layout/footer/Footer.jsx'
const Primary = ({children}) => {
  return (
    <>
      <Navbar />
        {children}
      <Footer />
    </>
  )
}

export default Primary
