import React from 'react'

import Card from '../../../../components/ui/card/index.jsx'
import SectionTitle from '../../../../components/ui/sectionTitle/index.jsx'

const index = () => {

  const visionCards = [
    {
      title: "TOLSTOY-1",
      description: "World's First Text-to-Character AI System",
      image: "./src/media/assets/img/tolstoys.svg",
    },
    {
      title: "TOLSTOY-1",
      description: "World's First Text-to-Character AI System",
      image: "./src/media/assets/img/tolstoys.svg",
    },
    {
      title: "TOLSTOY-1",
      description: "World's First Text-to-Character AI System",
      image: "./src/media/assets/img/tolstoys.svg",
    },
  ]


  return (
    <section className='vision-section py-20 my-20'>
      <div className='container'>
        <div className='w-full flex flex-col justify-start gap-10'>
          <div className='w-full text-center'>
            <SectionTitle
              heading="Our Vision"
              headingDesc={
                <>
                  Alethea AI aims to bring{' '}
                  <span className='text-blue-600'>Generative AI and Web3 together.</span>
                </>
              }
              subHeadingDesc="We are not only building powerful AI Systems, but also enabling an underlying 
              property rights layer that unlocks the value propositions of Web3 for the users of those systems."
            />
          </div>
          <div className='w-full flex flex-row justify-between'>
            {visionCards.map((card, index) => (
              <Card img={card.image} title={card.title} desc={card.description} isCenter="true" isButton="true" variant='vision' />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default index
