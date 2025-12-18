import React from 'react'
import DescriptionCards from '../../../../components/DescriptionCards.jsx'
import Card from '../../../../components/ui/card/index.jsx'
import SectionTitle from '../../../../components/ui/sectionTitle/index.jsx';

const index = () => {

  const inftBenefits = [
    {
      id: 1,
      img: "./src/media/assets/img/gear.svg",
      title: "Provable Ownership",
      desc: "The characters exist as intelligent NFTs (iNFT) on blockchain, enabling their creators to verify ownership without a trusted third party."
    },
    {
      id: 2,
      img: "./src/media/assets/img/gear.svg",
      title: "Data Sovereignty",
      desc: "Own the data generated or collected your character, decide on which datasets are added to their knowledge bases, and shape their evolution."
    },
    {
      id: 3,
      img: "./src/media/assets/img/gear.svg",
      title: "iNFT Assets",
      desc: "Characters can generate other assets such as art, create scarcity around their own merchandise, own AI assets like voices, games, that exist in the iNFT Ecosystem."
    },
    {
      id: 4,
      img: "./src/media/assets/img/gear.svg",
      title: "Governance",
      desc: "Characters can decentralize the governance of their narrative and evolution, enabling their supporters to choose the datasets that shape their intelligence to the type of assets they create or own."
    },
    {
      id: 5,
      img: "./src/media/assets/img/gear.svg",
      title: "Decentralized Interoperability",
      desc: "iNFTs on the iNFT Protocol are interoperable across all compatible applications, allowing them to seamlessly."
    },
    {
      id: 6,
      img: "./src/media/assets/img/gear.svg",
      title: "Data Sovereignty",
      desc: "Own the data generated or collected your character, decide on which datasets are added to their knowledge bases, and shape their evolution."
    }
  ];

  return (
    <section className='description-section py-20 my-20'>
      <div className='container'>
        <div className='flex flex-col justify-center items-center gap-8'>
          <SectionTitle
          heading="Keeping in line with our vision, we are excited to share that"
          subHeading="all TOYSTOL-1 generated characters are fully compatible with the iNFT Protocol"
          variant='description'
          className='self-start'
          />
          <div className='w-full flex flex-row flex-wrap justify-between gap-y-8'>
            {inftBenefits.map((benefit) => (
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
