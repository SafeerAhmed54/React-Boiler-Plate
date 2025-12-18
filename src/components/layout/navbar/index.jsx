import React from 'react'
import Button from '../../ui/button/index.jsx'
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
        </>
    )
}

export default Navbar
