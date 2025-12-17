import React from 'react'

const Navbar = () => {
  return (
    <>
    <div className='container'>
        <div className='row py-6'>
            <div className='left-nav'>
               <p className='font-bold'>techgear</p>
            </div>
            <div className='right-nav'>
                <ul className='flex flex-row justify-between items-center'>
                    <li>
                        <a href="">Home</a>
                    </li>
                    <li>
                        <a href="">Product</a>
                    </li>
                    <li>
                        <a href="">Services</a>
                    </li>
                    <li>
                        <a href="">Contact</a>
                    </li>
                    <li>
                        <a href="" className='border-2 rounded'>Signin</a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    </>
  )
}

export default Navbar
