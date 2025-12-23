import React from 'react'
import Button from '../../../../components/button/Button.jsx'

const index = () => {
  return (
    <section className='get-connected my-20'>
      <div className='container'>
        <div className='p-10 w-full flex flex-row justify-between items-center bg-slate-100 rounded-lg'>
          <div className='w-[40%]'>
            <h1 className='text-black text-3xl font-bold'>
              Stay Connected
            </h1>
            <p className='text-black'>Monthly Newsletter to stay up to date with our latest news and updates</p>
          </div>
          <div className='p-2 w-1/2 flex flex-row justify-between items-center border rounded-lg border-black bg-white' >
            <input type="text" placeholder='Enter your email'  className='bg-transparent text-black focus:outline-none'/>
            <Button onClick={(e) => {
              e.preventDefault();
            }}
              btnText="Subscribe"
              variant="subscribe"
            />
          </div>

        </div>
      </div>
    </section>
  )
}

export default index
