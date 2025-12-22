import React from 'react'
import { ArrowBigRight } from 'lucide-react'
import BackgroundCard from '../../../../components/BackgroundCard.jsx'
import AboutButton from '../../../../components/AboutButton'
import Button from '../../../../components/ui/button/index.jsx'
import SectionHeading from '../../../../components/ui/sectionTitle/index.jsx'
import Card from '../../../../components/ui/card/index.jsx'

const index = () => {

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
              heading={"TOLSTOY-1 makes"}
              subHeading={"Text-to-Character a reality"}
              headingDesc={`After receiving a natural description of a character as an input,
              it generates within seconds an interactive character with its own appearance,voice, 
              intelligence, personality, and identity.`}
              subHeadingDesc={`Any TOLSTOY-1 generated AI Character has a customizable personality and voice,
              can be used to generate media, can be tokenized and owned, and is interoperable
              amongst the dApps built on the iNFT Protocol.`}
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
