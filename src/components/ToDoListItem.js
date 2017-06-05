import './ToDoListItem.css'
import React, { Component } from 'react'
import classNames from 'classnames'

import Checkbox from './Checkbox'

class ToDoListItem extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const classes = classNames('ToDoListItem', { 'ToDoListItem-completed' : this.props.completed })
    console.log(this.props.completed)
    return (
      <div className={ classes } onClick={ this.props.onClick }>
        <label>
          <Checkbox
            checked={ this.props.completed }
          />
          { this.props.text }
        </label>
      </div>
    )
  }
}

export default ToDoListItem
