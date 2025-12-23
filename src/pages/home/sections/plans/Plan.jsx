import React from 'react'
import Card from '../../../../components/card/Card.jsx'
import SectionTitle from '../../../../components/sectionTitle/SectionTitle.jsx'

const index = ({data}) => {
  return (
    <section className='description-section py-20 my-20'>
      <div className='container'>
        <div className='flex flex-col justify-center items-center gap-14'>
          <SectionTitle
            heading={data.title}
            headingDesc={data.description}
            isCentered="true"
          />
          <div className='w-full flex flex-col gap-4'>
            <h1 className='text-4xl font-bold text-center'></h1>
          </div>
          <div className='w-full flex flex-row flex-wrap justify-between gap-2'>
            {data.features.map((plan) => (<div key={plan.id} className='w-[32%]'>
              <Card  
                img={plan.img} 
                title={plan.title} 
                desc={plan.desc} 
                variant='plan' 
                isCenter="true" 
                isBg="true" 
                className=''/>
            </div>))}
            {/* {plans.map((plan) => (
              <PlansCard key={plan.id} img={plan.img} title={plan.title} desc={plan.desc} />
            ))} */}
          </div>
        </div>
      </div>
    </section>
  )
}

export default index
