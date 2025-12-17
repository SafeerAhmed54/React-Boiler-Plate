import React from 'react'
import {ShoppingCart} from "lucide-react"

const Button = (props) => {
  return (
    <button className='button py-4 px-6 rounded bottom-0'>
        {props.icon} {props.text}
    </button>
  )
}

export default Button
