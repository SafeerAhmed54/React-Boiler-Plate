import React from 'react'
import { ArrowBigRight, Section } from 'lucide-react'
import Button from '../../../../components/button/index.jsx'
import SectionTitle from '../../../../components/sectionTitle/index.jsx'
import Card from '../../../../components/card/index.jsx'

const Featured = ({data}) => {

  return (
    <section className='feature-section py-20 my-20'>
      <div className='container'>
        <div className='flex flex-row justify-center items-center'>
          <div className='p-10 w-full h-fit rounded-3xl bg-slate-950 border border-slate-800 row'>
            <div className='w-1/2 self-stretch flex flex-col justify-between pr-20'>
              <SectionTitle
                heading={data.label}
                subHeading={data.title}
                headingDesc={data.description}
                subHeadingDesc={data.feature}
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
              {data.featureCards.map((item) => (
                <Card key={item.id}
                img={item.link}
                isCenter={true}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Featured









































{/* <h1 className='text-4xl font-semibold text-blue-600 underline'>Featured App:</h1>
              <h1 className='text-4xl font-semibold'>AI Characters</h1>
              <p>AICharacter.com is the first dApp to integrate Alethea AI's
                TOLSTOY-1 AI system and the iNFT Protocol into the AI character creation process.
              </p>
              <p>
                AI Character Beta is now available to anyone willing to test and participate in 
                its phased launch.
              </p> */}