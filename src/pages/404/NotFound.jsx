import React from 'react'

import {NavLink} from 'react-router'

const NotFound = () => {
  return (
    <section>
       <div className='container mx-auto'>
            <div className='flex flex-col justify-center items-center gap-10 h-screen'>
              <div>
                <h2 className='text-9xl font-bold text-center'>404</h2>
                <p className='text-6xl text-center'>Page Not Found</p>
              </div>
                <NavLink to={"/"} className="border rounded-full py-2 px-4 hover:bg-white hover:text-black transition-colors" >Go Back To Home</NavLink>
            </div>
        </div>
    </section>
  )
}

export default NotFound
