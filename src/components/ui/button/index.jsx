import { ArrowRight } from 'lucide-react'
import React from 'react'

const AboutButton = ({ onClick, className = "", btnText, icon, variant = "outline" }) => {

    // Define variants for different button styles
    const variants = {
        primary: 'w-fit h-fit bg-slate-950 text-white border border-blue-600 rounded-lg p-3',
        secondary: 'w-fit h-fit text-white rounded-full bg-slate-600 px-4 py-2',
        subscribe: 'bg-black py-2 px-8 rounded-lg',
        outline: 'w-fit h-fit border border-slate-950 text-slate-950',
    }

    // Use the icon component if provided, otherwise use null
    const IconComponent = icon || null
    
    return (

        // Buttons with different variants and icons
        <button onClick={onClick} className={` ${variants[variant]} ${className}`}>
            {btnText} {IconComponent}
        </button>
    )
}

export default AboutButton