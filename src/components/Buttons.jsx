import React from 'react'

const Buttons = ({ bgColor, color, borderRadius, size, text }) => {
  return (
    <button type='button'
    style={{backgroundColor: bgColor, color: color, borderRadius: borderRadius, }}
    className={`text-${size} p-3 hover:drop-shadow-xl`}
    >{text}</button>
  )
}

export default Buttons