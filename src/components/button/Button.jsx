// @import dependencies
import React from 'react'
import { ArrowRight } from 'lucide-react'

const Button = ({ onClick, className = "", btnText, icon, variant = "outline" }) => {

    // Define variants for different button styles
    const variants = {
        primary: 'w-fit h-fit bg-slate-950 text-white border border-blue-600 rounded-lg p-3 ',
        secondary: 'w-fit h-fit text-white rounded-full bg-slate-600 px-4 py-2',
        subscribe: 'bg-black py-2 px-8 rounded-lg',
        outline: 'w-5 h-5 rounded-full bg-blue-500',
    }

    // Use the icon component if provided, otherwise use null
    const IconComponent = icon || null
    
    return (
        // Buttons with different variants and icons
        <button onClick={onClick} className={` ${variants[variant]} ${className} `}>
            {btnText} {IconComponent}
        </button>
    )
}

export default Button