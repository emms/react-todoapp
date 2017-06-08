import './Checkbox.css'
import React from 'react'

const Checkbox = ({ checked, onClick }) => (
  <div className="Checkbox">
    <input type="checkbox" checked={ checked } onClick={ onClick }/>
    <div/>
  </div>
)

export default Checkbox
