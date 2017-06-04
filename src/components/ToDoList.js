import './ToDoList.css'
import React, { Component } from 'react'

import ToDoListItem from './ToDoListItem'

class ToDoList extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="ToDoList">
        { this.props.toDos.map((toDo, i) => {
          return (
            <ToDoListItem
              key={ i }
              text={ toDo.text }
            />
          )
        }) }
      </div>
    )
  }
}

export default ToDoList
