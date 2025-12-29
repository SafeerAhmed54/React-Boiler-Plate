import React from 'react'

const Hero = ({data}) => {
  return (
    <section className='home-section'>
      <div className='container'>
        <div className='col h-screen'>
          <div className='row h-1/2'>
            <div className='right-home'>
              <h2 className='text-3xl'>{data.subtitle}</h2>
              <h1 className='text-4xl font-bold'>{data.title}</h1>
              <p className=''>{data.description}</p>
            </div>
            <div className='left-home'>
              <img src='./src/media/assets/img/video.svg' alt='' className='bg-slate-950 rounded-2xl' />
            </div>
          </div>
          <div className='row h-1/2'>
            <div className='card-section bg-slate-950 border border-slate-800'>
              <div className='container'>
                <div className='row p-14'>
                  <div className='left-card'>
                    <h1 className='text-4xl font-bold'>{data.dawnSection.title}</h1>
                  </div>
                  <div className='right-card'>
                    <p>{data.dawnSection.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
