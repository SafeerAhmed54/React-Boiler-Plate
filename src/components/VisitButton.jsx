import React from 'react'
import { ArrowBigRight } from 'lucide-react'

const VisitButton = (props) => {
    return (
        <button className='w-fit flex flex-row gap-4 border border-blue-600 bg-slate-950 rounded-lg py-3 px-2'>
            {props.text} {props.function}
        </button>
    )
}

export default VisitButton
