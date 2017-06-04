import './Checkbox.css'
import React from 'react'

const Checkbox = ({ checked, onClick }) => (
  <input type="checkbox" checked={ checked } onClick={ onClick }/>
)

export default Checkbox
