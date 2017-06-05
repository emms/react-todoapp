import './Counter.css'
import React from 'react'

const Counter = ({ completed, total }) => (
  <div className="Counter">
    { completed } / { total }
  </div>
)

export default Counter
