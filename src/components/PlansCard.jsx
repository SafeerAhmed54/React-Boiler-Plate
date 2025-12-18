import React from 'react'

const PlansCard = ({img , title , desc}) => {
    return (
        <div className='w-1/3 flex flex-col gap-4'>
            <div className='p-10 w-fit h-auto bg-slate-950 border border-slate-800 rounded-xl'>
                <img src={img} alt="" />
            </div>
            <div className='flex flex-col justify-start items-center gap-2'>
                <h1 className='text-xl font-bold'>{title}</h1>
                <p className='text-center'>{desc}
                </p>
            </div>
        </div>
    )
}

export default PlansCard
