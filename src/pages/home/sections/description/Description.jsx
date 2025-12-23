import React from 'react'
import Card from '../../../../components/card/Card.jsx'
import SectionTitle from '../../../../components/sectionTitle/SectionTitle.jsx';

const index = ({data}) => {

  return (
    <section className='description-section py-20 my-20'>
      <div className='container'>
        <div className='flex flex-col justify-center items-center gap-10'>
          <SectionTitle
          heading={data.title}
          subHeading={data.subTitle}
          subHeadingDesc={data.description}
          variant='description'
          className='self-start'
          />
          <div className='w-full flex flex-row flex-wrap justify-between gap-y-8'>
            {data.inftBenefits.map((benefit) => (
              <Card key={benefit.id} img={benefit.img} title={benefit.title} desc={benefit.desc} variant='description' />
            ))}
            {/* {inftBenefits.map((benefit) => (
              <DescriptionCards key={benefit.id} title={benefit.title} desc={benefit.desc} />
            ))} */}
          </div>
        </div>
      </div>
    </section>
  )
}

export default index
