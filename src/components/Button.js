import './Button.css'
import React from 'react'

const Button = ({ onClick, text }) => (
  <button
    className="Button"
    onClick={ onClick }
  >
    { text }
  </button>
)

export default Button
