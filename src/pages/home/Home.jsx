// @import dependencies
import React from 'react'

// @import constants
import appData from '../../constants/AppData.js'
import sectionMapping from '../../constants/SectionMapping.js'
const index = () => {
  return (
    <div>
      {/* Dynamic sections mapping */}
      {sectionMapping
        .filter(section => section.enabled)
        .map(({ id, component: Component, dataKey }) => (
          <Component 
            key={id} 
            data={appData[dataKey]} 
          />
        ))
      }
    </div>
  )
}

export default index
