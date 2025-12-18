import React from 'react'
import { ArrowRight } from 'lucide-react'
import Button from './ui/button/index.jsx'

const VisionCards = () => {
    return (
        <div className='p-6 w-fit h-fit bg-slate-900 rounded-xl flex flex-col justify-center items-center gap-5'>
            <img src="./src/media/assets/img/tolstoys.svg" alt="" />
            <h1>TOLSTOY-1</h1>
            <p className='mb-10'>World's First Text-to-Character AI System</p>
            
        </div>
    )
}

export default VisionCards
