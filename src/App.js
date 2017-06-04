import React, { Component } from 'react'
import './App.css'

import Container from './components/Container'
import Input from './components/Input'
import ToDoList from './components/ToDoList'
import Button from './components/Button'

class App extends Component {
  constructor(props) {
    super(props)

    this.inputRef = null
    this.addTodo = this.addTodo.bind(this)
    this.state = {
      toDos: []
    }
  }

  addTodo() {
    if (this.inputRef.value) {
      const newToDo = {
        text: this.inputRef.value,
        status: 'incomplete'
      }
      this.setState({
        toDos: this.state.toDos.concat([newToDo])
      })
      this.inputRef.value = ''
    }
  }

  render() {
    return (
      <Container>
        <h1>React To Do app</h1>
        <Input
          name="todoinput"
          placeholder="What do you need to do?"
          inputRef={ dom => this.inputRef = dom }
        />
        <Button
          onClick={ this.addTodo }
          text="Add"
        />
        <ToDoList
          toDos={ this.state.toDos }
          >
        </ToDoList>
      </Container>
    )
  }
}

export default App;
