import React from 'react'

const index = ({ heading, subHeading, headingDesc, subHeadingDesc , className="" , variant="", isCentered = false}) => {

    // Varaints for different title
    const varaints = {
        description : 'text-[28px] text-white',
    }

    return (
        <div className={`flex flex-col gap-4 ${className}`}>
            <h2 className={`text-[39px] font-bold ${varaints[variant]} ${isCentered ? 'text-center' : ''}`}>{heading} <br />
                <span className={`font-semibold ${subHeading ? 'text-blue-600' : ''} ${varaints[variant]}`}>{subHeading}</span>
            </h2>
            <p>{headingDesc}</p>
            <p>{subHeadingDesc}</p>
        </div>
    )
}

export default index
