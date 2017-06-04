import './ToDoListItem.css'
import React, { Component } from 'react'
import classNames from 'classnames'
import _ from 'lodash'

import Checkbox from './Checkbox'

class ToDoListItem extends Component {
  constructor(props) {
    super(props)
    this.state = {
      completed: false,
      id: null
    }
    this.toggleStatus = this.toggleStatus.bind(this)
  }

  componentWillMount() {
    const id = _.uniqueId("todo-");
    this.setState({id: id});
  }

  toggleStatus(e) {
    //if (e.targe)
    e.stopPropagation()
    this.setState({ completed: !this.state.completed },
    () => (
      console.log(this.state)
    ))
  }

  render() {
    const classes = classNames('ToDoListItem', { 'ToDoListItem-completed' : this.state.completed })
    return (
      <div className={ classes } >

        <label><Checkbox checked={ this.state.completed } onClick={ (e) => this.toggleStatus(e) } />{ this.props.text }</label>
      </div>
    )
  }
}

export default ToDoListItem
