import React from 'react'
import Button from '../../../../components/button/Button.jsx'

const index = ({data}) => {
  return (
    <section className='get-connected my-20'>
      <div className='container'>
        <div className='p-10 w-full flex flex-row justify-between items-center bg-slate-100 rounded-lg'>
          <div className='w-[40%]'>
            <h1 className='text-black text-3xl font-bold'>
              {data.title}
            </h1>
            <p className='text-black'>{data.description}</p>
          </div>
          <div className='p-2 w-1/2 flex flex-row justify-between items-center border rounded-lg border-black bg-white' >
            <input type="text" placeholder={data.placeholder}  className='bg-transparent text-black focus:outline-none'/>
            <Button onClick={(e) => {
              e.preventDefault();
            }}
              btnText={data.buttonText}
              variant="subscribe"
            />
          </div>

        </div>
      </div>
    </section>
  )
}

export default index
