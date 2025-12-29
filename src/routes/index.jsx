// @import dependencies
import React from 'react'
import { Routes, Route } from 'react-router'

// @import layouts
import PrimaryLayout from '../layout/primaryLayout/index.jsx'

// @import pages
import Home from '../pages/home/index.jsx'
import INFTProtocol from '../pages/iNFTProtocol/index.jsx'
import API from '../pages/api/index.jsx'
import DApp from '../pages/dApp/index.jsx'
import Research from '../pages/research/index.jsx'
import About from '../pages/about/index.jsx'
import NotFound from '../pages/404/index.jsx'

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
