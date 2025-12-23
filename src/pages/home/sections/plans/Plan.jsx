import React from 'react'
import Card from '../../../../components/card/Card.jsx'
import SectionTitle from '../../../../components/sectionTitle/SectionTitle.jsx'

const plans = [
  {
    id: 1,
    img: "./src/media/assets/img/govern.svg",
    title: "Decentralized Governance",
    desc: "The iNFT Protocol enables governance by our community, and the decentralized governance will help ensure the right balance is achieved between ensuring non-malicious generations and creative freedom."
  },
  {
    id: 2,
    img: "./src/media/assets/img/content.svg",
    title: "Content Moderation Council",
    desc: "Alethea AI will release its AI Models progressively over time with taking into considerations the learnings and developments during the initial releases. These models can be used by anyone, including the AI Providers of the iNFT Protocol."
  },
  {
    id: 3,
    img: "./src/media/assets/img/phased.svg",
    title: "Phased Deployment",
    desc: "Alethea AI will release its AI Models progressively over time with taking into considerations the learnings and developments during the initial releases. These models can be used by anyone, including the AI Providers of the iNFT Protocol."
  }
];

const index = () => {
  return (
    <section className='description-section py-20 my-20'>
      <div className='container'>
        <div className='flex flex-col justify-center items-center gap-14'>
          <SectionTitle
            heading="TOLSTOY-1 is currently available in beta"
            headingDesc="Alethea AI will release its AI Models progressively over time with taking into considerations the 
            learnings and developments during the initial releases. These models can be used by anyone, including the AI Providers of the iNFT Protocol,"
            isCentered="true"
          />
          <div className='w-full flex flex-col gap-4'>
            <h1 className='text-4xl font-bold text-center'></h1>
          </div>
          <div className='w-full flex flex-row flex-wrap justify-between gap-2'>
            {plans.map((plan) => (<div key={plan.id} className='w-[32%]'>
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
