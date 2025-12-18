import React from 'react'

const DescriptionCards = ({title , desc}) => {
    return (
        <div className='py-3 w-[30%] h-auto flex-shrink-0 flex flex-col gap-6'>
            <div className='w-full h-auto flex flex-row justify-start items-center'>
                <img src="./src/media/assets/img/gear.svg" alt="" />
            </div>
            <h2 className='text-xl font-bold'>{title}</h2>
            <p className='font-semibold'>{desc}
            </p>
        </div>
    )
}

export default DescriptionCards
