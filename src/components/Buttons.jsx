import React from 'react'
import { useStateContext } from '../context/ContextProvider'

const Buttons = ({ bgColor, color, borderRadius, size, text, handleClick }) => {
  return (
    <button type='button'
    onClick={handleClick}
    style={{backgroundColor: bgColor, color: color, borderRadius: borderRadius, }}
    className={`text-${size} p-3 hover:drop-shadow-xl`}
    >{text}</button>
  )
}

export default Buttons