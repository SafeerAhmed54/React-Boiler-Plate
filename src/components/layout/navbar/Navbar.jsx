// @import dependencies
import React from 'react'
import { NavLink ,Outlet } from 'react-router'

// @import components
import Button from '../../button/Button.jsx'

const Navbar = () => {
    return (
        <>
        <div>
            <div className="navbar">
                <div className="container relative">
                    <div className='row'>
                        <div className="logo">
                            <img src="./src/media/assets/img/atl-logo.png" alt="" />
                        </div>
                        <div className='nav-links'>
                            <ul>
                                <li><NavLink to={'/'}>Home</NavLink></li>
                                <li><NavLink to={'/iNFTProtocol'}>iNFT Protocol</NavLink></li>
                                <li><NavLink to={'/API'}>API</NavLink></li>
                                <li><NavLink to={'/dApp'}>dApp</NavLink></li>
                                <li><NavLink to={'/research'}> Research</NavLink></li>
                                <li><NavLink to={'/about'}>About</NavLink></li>
                            </ul>
                        </div>
                        <div className='dApp-btn-div '>
                            <Button onClick={(e) => {
                                e.preventDefault();
                            }}
                                btnText="dApps"
                                variant="primary"
                            />
                            
                        </div>
                    </div>
                </div>
            </div>
            <Outlet/>
        </div>
        </>
    )
}

export default Navbar
