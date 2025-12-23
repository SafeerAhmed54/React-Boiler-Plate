// @import dependencies
import React from 'react'

// @import layouts
import PrimaryLayout from '../../layout/primaryLayout/PrimaryLayout.jsx'

// @import components
import Navbar from "../../components/layout/navbar/Navbar.jsx"

// @import sections
import Hero from "./sections/hero/Hero.jsx"
import About from "./sections/about/About.jsx"
import Tech from "./sections/tech/Tech.jsx"
import Feature from "./sections/featured/Featured.jsx"
import Vision from "./sections/vision/Vision.jsx"
import Desc from "./sections/description/Description.jsx"
import Plan from "./sections/plans/Plan.jsx"
import Connected from "./sections/conntected/Connected.jsx"
import data from "../../constants/AppData.js"
const index = () => {
  return (
    <div>
      {/* Development components - commented out */}
      {/* <div className='flex md:flex-row flex-col gap-2'>
        {Array.from({ length: 6 }, (_, index) => (
          <div key={index} className='w-full md:w-4/12 bg-red-400'>
            <Card primaryCard={true} isCentered={true} />
          </div>
        ))}
      </div> */}

      {/* Test components - commented out */}
      {/* <SectionTitle sectionDescription={'its is description'} sectionTitle={'sesction title'} titleClass='text-red-500' descClass='text-green-500'/>
      <AboutButton onClick={()=>{console.log('clicked')}} btnText='click me'  variants='outline'/> */}
      
      {/* Main layout with sections */}
        <Hero  data={data.hero}/>
        <About data={data.capabilities}/>
        <Tech data={data.useCases}/>
        <Feature data={data.featuredApp}/>
        <Vision data={data.vision} />
        <Desc data={data.announcement}/>
        <Plan data={data.beta} />
        <Connected data={data.newsletter} />
    </div>
  )
}

export default index
