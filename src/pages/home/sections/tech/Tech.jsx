import React from 'react'
import { ArrowLeft , ArrowRight, Section } from 'lucide-react'
import Card from '../../../../components/card/Card.jsx'
import SectionHeading from '../../../../components/sectionTitle/SectionTitle.jsx'

const techData = [
  {
    id : 1,
    img: "./src/media/assets/img/parody.svg",
    title: "Parody",
  },
  {
    id : 2,
    img: "./src/media/assets/img/parody.svg",
    title: "Parody",
  },
  {
    id : 3,
    img: "./src/media/assets/img/parody.svg",
    title: "Parody",
  },
  {
    id : 4,
    img: "./src/media/assets/img/parody.svg",
    title: "Parody",
  },
]

const index = () => {
  return (
    <section className='tech-section'>
      <div className='container'>
        <div className='col gap-8'>
          <div className='heading-tech'>
            <SectionHeading
            heading={`TOLSTOY-1 can be used to create characters`}
            subHeading={`for wide variety of use cases:`}
            />
            <div className='slider-btn'>
              <button className='prev-btn'><ArrowLeft /></button>
              <button className='next-btn'><ArrowRight /></button>
            </div>
          </div>
          <div className='w-full flex flex-row justify-center items-center gap-8'> 
            {techData.map((item) => (
              <Card 
              key={item.id} 
              img={item.img} 
              title={item.title}  
              variant="tech" 
              isCenter="true" 
              className='rounded-xl shrink-0 w-[250px] h-[250px]'/>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default index
