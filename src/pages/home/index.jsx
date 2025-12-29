// @import dependencies
import React from 'react'

// @import layouts
import PrimaryLayout from '../../layout/primaryLayout/index.jsx'

// @import components
import Navbar from "../../components/layout/navbar/index.jsx"

// @import sections
import Hero from "./sections/hero/index.jsx"
import About from "./sections/about/index.jsx"
import Tech from "./sections/tech/index.jsx"
import Feature from "./sections/featured/index.jsx"
import Vision from "./sections/vision/index.jsx"
import Desc from "./sections/description/index.jsx"
import Plan from "./sections/plans/index.jsx"
import Connected from "./sections/conntected/index.jsx"

//@import Data from js File
import data from "../../constants/AppData.js"
const Home = () => {
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

export default Home
