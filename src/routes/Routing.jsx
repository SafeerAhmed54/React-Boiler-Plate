// @import dependencies
import React from 'react'
import { Routes, Route } from 'react-router'

// @import layouts
import PrimaryLayout from '../layout/primaryLayout/PrimaryLayout.jsx'

// @import pages
import Home from '../pages/home/Home.jsx'
import INFTProtocol from '../pages/iNFTProtocol/INFTProtocol.jsx'
import API from '../pages/api/API.jsx'
import DApp from '../pages/dApp/dApp.jsx'
import Research from '../pages/research/Research.jsx'
import About from '../pages/about/About.jsx'
import NotFound from '../pages/404/NotFound.jsx'

const Routing = () => {
  return (
    <Routes>
      <Route element={<PrimaryLayout />}>
        <Route path='/' element={<Home />} />
        <Route path='/iNFTProtocol' element={<INFTProtocol />} />
        <Route path='/API' element={<API />} />
        <Route path='/dApp' element={<DApp />} />
        <Route path='/research' element={<Research />} />
        <Route path='/about' element={<About />} />
      </Route>
  
      <Route path='*' element={<NotFound />} />
    </Routes>
  )
}

export default Routing
