import React from 'react'
import { ArrowBigRight, Section } from 'lucide-react'
import FeatureCard from '../../../../components/FeatureCard.jsx'
import Button from '../../../../components/button/Button.jsx'
import SectionTitle from '../../../../components/sectionTitle/SectionTitle.jsx'

const index = () => {

  const featureCards = [
    {
      id: 1,
      link: "./src/media/assets/img/brad.svg"
    },
    {
      id: 2,
      link: "./src/media/assets/img/elon.svg"
    },
    {
      id: 3,
      link: "./src/media/assets/img/taylor.svg"
    },
    {
      id: 4,
      link: "./src/media/assets/img/ronaldo.svg"
    }
  ]

  return (
    <section className='feature-section py-20 my-20'>
      <div className='container'>
        <div className='flex flex-row justify-center items-center'>
          <div className='p-10 w-full h-fit rounded-3xl bg-slate-950 border border-slate-800 row'>
            <div className='w-1/2 self-stretch flex flex-col justify-between pr-20'>
              <SectionTitle
                heading={`Featured App:`}
                subHeading={`AI Characters`}
                headingDesc={`AICharacter.com is the first dApp to integrate Alethea AI's
                TOLSTOY-1 AI system and the iNFT Protocol into the AI character creation process.`}
                subHeadingDesc={`AI Character Beta is now available to anyone willing to test and participate in 
                its phased launch.`}
                className='justify-between'
              />
              <Button onClick={(e) => {
                e.preventDefault();
              }}
                btnText="Visit AICharacter.com"
                variant="primary"
                icon={<ArrowBigRight />}
                className='flex flex-row justify-center items-center gap-2'
              />
            </div>
            <div className='w-1/2 flex flex-row flex-wrap justify-between gap-y-4'>
              {featureCards.map((item) => (
                <FeatureCard key={item.id} link={item.link} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default index









































{/* <h1 className='text-4xl font-semibold text-blue-600 underline'>Featured App:</h1>
              <h1 className='text-4xl font-semibold'>AI Characters</h1>
              <p>AICharacter.com is the first dApp to integrate Alethea AI's
                TOLSTOY-1 AI system and the iNFT Protocol into the AI character creation process.
              </p>
              <p>
                AI Character Beta is now available to anyone willing to test and participate in 
                its phased launch.
              </p> */}