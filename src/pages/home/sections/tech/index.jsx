import React from 'react'
import { ArrowLeft , ArrowRight, Section } from 'lucide-react'
import Card from '../../../../components/card/index.jsx'
import SectionHeading from '../../../../components/sectionTitle/index.jsx'

const Tech = ({data}) => {
  return (
    <section className='tech-section'>
      <div className='container'>
        <div className='col gap-8'>
          <div className='heading-tech'>
            <SectionHeading
            heading={data.title}
            subHeading={data.subTitle}
            />
            <div className='slider-btn'>
              <button className='prev-btn'><ArrowLeft /></button>
              <button className='next-btn'><ArrowRight /></button>
            </div>
          </div>
          <div className='w-full flex flex-row justify-between items-center'> 
            {data.techData.map((item) => (
              <Card 
              key={item.id} 
              img={item.img} 
              title={item.title}  
              variant="tech" 
              isCenter="true" 
              className='rounded-xl shrink-0 w-[270px] h-[270px]'/>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Tech
