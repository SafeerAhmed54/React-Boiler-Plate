import React from 'react'

import Card from '../../../../components/card/Card.jsx'
import SectionTitle from '../../../../components/sectionTitle/SectionTitle.jsx'

const index = ({data}) => {

  return (
    <section className='vision-section py-20 my-20'>
      <div className='container'>
        <div className='w-full flex flex-col justify-start gap-10'>
          <div className='w-full text-center'>
            <SectionTitle
              heading={data.title}
              headingDesc={
                <>
                  {data.subtitle}{' '}
                  <span className='text-blue-600'>{data.childSubTitle}</span>
                </>
              }
              subHeadingDesc={data.description}
            />
          </div>
          <div className='w-full flex flex-row justify-between'>
            {data.visionCards.map((card, index) => (
              <Card key={index} img={card.image} title={card.title} desc={card.description} isCenter="true" isButton="true" variant='vision' />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default index
