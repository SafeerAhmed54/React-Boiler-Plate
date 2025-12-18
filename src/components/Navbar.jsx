import React from 'react'

const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <div className="container">
          <div className='row'>
            <div className="logo">
              <img src="./src/media/assets/img/atl-logo.png" alt="" />
            </div>
            <div className='nav-links'>
              <ul>
                <li><a href="">iNFT Protocol</a></li>
                <li><a href="">API</a></li>
                <li><a href="">dApp</a></li>
                <li><a href="">Research</a></li>
                <li><a href="">About</a></li>
              </ul>
            </div>
            <div className='dApp-btn-div '>
              <button className=' dApp-btn bg-black border-blue-500 rounded-lg p-3'>dApps</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar
