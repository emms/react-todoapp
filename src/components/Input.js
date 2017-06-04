import './Input.css'
import React, { Component } from 'react'

class Input extends Component {
  render() {
    return (
      <input
        type="text"
        name={ this.props.name }
        placeholder={ this.props.placeholder }
        ref={ this.props.inputRef }
      />
    )
  }
}

export default Input
