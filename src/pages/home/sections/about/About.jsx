import React from 'react'
import { ArrowBigRight } from 'lucide-react'
import Button from '../../../../components/button/Button.jsx'
import SectionHeading from '../../../../components/sectionTitle/SectionTitle.jsx'
import Card from '../../../../components/card/Card.jsx'

const index = ({data}) => {

  Array.from({ length: 4 }).map((_, index) => {
    return (
      <div key={index}>
        <Button
    
        />
      </div>
    )
  })

  return (
    <section className='about-section'>
      <div className='container'>
        <div className='row'>
          <div className='left-about'>
            <SectionHeading
              heading={data.title}
              subHeading={data.subtitle}
              headingDesc={data.description}
              subHeadingDesc={data.subdDescription}
            />
            <Button onClick={(e) => {
              e.preventDefault();
            }}
              btnText="TOLSTOY-1 API"
              variant="primary"
              icon={<ArrowBigRight />}
            />
          </div>
          <div className='right-about '>
            <Card
            img={"./src/media/assets/img/digital-company.svg"}
            />
            <h2 className='text-2xl font-bold'>Ownable</h2>
            <div className='about-buttons-div'>
              {Array.from({ length: 3 }).map((_, index) => {
                return (
                  <div  key={index}>
                    <Button
                      onClick={() => {

                      }}
                      btnText={""}
                    />
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default index
