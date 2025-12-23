// @import dependencies
import React from 'react'
import { ArrowRight } from 'lucide-react'

// @import components
import Button from '../button/Button.jsx'

const Card = ({ img, title, desc, className = "", isCenter = false, isButton = false, variant = "", isBg = false }) => {
  const variants = {
    tech : " bg-slate-950 border border-slate-800 flex flex-col gap-4",
    vision: 'px-6 py-10 w-fit h-fit bg-slate-900 rounded-xl flex flex-col gap-5',
    description: 'w-[30%] h-auto flex-shrink-0 flex flex-col gap-6',
    plan:'flex flex-col gap-4 '
  }

  const bg = "w-[350px] h-[280px] bg-slate-950 border border-slate-800 rounded-xl"
  return (
    <div className={`${variants[variant]} ${className} ${isCenter ? "items-center justify-center text-center" : ""}`}>

      {/* Image Div with or without Background */}
      <div className={`flex flex-row
        ${isCenter ? "items-center justify-center" : "items-start"}
        ${isBg ? bg : ""}
        `}>
        <img src={img} alt="" className='' />
      </div>
      {/* Title and Description */}
      <h2 className='text-2xl font-bold'>{title}</h2>
      <p>{desc}</p>

      {/* Button Optional for Vision */}
      {isButton && <Button onClick={(e) => {
        e.preventDefault();
      }}
        btnText="Learn More"
        variant="secondary"
        icon={<ArrowRight />}
        className='flex flex-row justify-center items-center gap-2'
      />}
    </div>
  )
}

export default Card
