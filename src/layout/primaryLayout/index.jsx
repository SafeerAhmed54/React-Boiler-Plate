import React from 'react'
import Navbar from '../../components/layout/navbar/index.jsx'
import Footer from '../../components/layout/footer/index.jsx'
const index = ({children}) => {
  return (
    <>
    <Navbar />
        {children}
    <Footer />
    </>
  )
}

export default index
