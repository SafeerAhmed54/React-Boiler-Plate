// @import dependencies
import React from 'react'
import { Outlet } from 'react-router'

// @import components
import Navbar from '../../components/layout/navbar/index.jsx'
import Footer from '../../components/layout/footer/index.jsx'
const PrimaryLayout = ({children}) => {
  return (
    <>
      <Navbar />
        {children}
      <Footer />
    </>
  )
}

export default PrimaryLayout
