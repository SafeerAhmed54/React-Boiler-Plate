// @import dependencies
import React from 'react'

const FeatureCard = ({link}) => {
    return (
        <div className='w-fit h-fit'>
            <img src={link} alt="img" className='w-full h-auto' />
        </div>
    )
}

export default FeatureCard
