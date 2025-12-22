import React from 'react'
import Navbar from "../../components/layout/navbar/index.jsx"
import Home from "./sections/home/index.jsx"
import About from "./sections/about/index.jsx"
import Tech from "./sections/tech/index.jsx"
import Feature from "./sections/featured/index.jsx"
import Vision from "./sections/vision/index.jsx"
import Desc from "./sections/description/index.jsx"
import Plan from "./sections/plans/index.jsx"
import Connected from "./sections/conntected/index.jsx"
import PrimaryLayout from '../../layout/primaryLayout/index.jsx'
const index = () => {
  return (
    <div>
      {/* <div className='flex md:flex-row flex-col gap-2'>

{Array.from({ length: 6 }, (_, index) => (
  <div key={index} className='w-full md:w-4/12 bg-red-400'>
    <Card primaryCard={true} isCentered={true} />
  </div>
))}


      </div> */}

      {/* <SectionTitle sectionDescription={'its is description'} sectionTitle={'sesction title'} titleClass='text-red-500' descClass='text-green-500'/>
      <AboutButton onClick={()=>{console.log('clicked')}} btnText='click me'  variants='outline'/> */}
      
      <PrimaryLayout>
        <Home />
        <About />
        <Tech />
        <Feature />
        <Vision />
        <Desc />
        <Plan />
        <Connected />
      </PrimaryLayout>
    </div>
  )
}

export default index
