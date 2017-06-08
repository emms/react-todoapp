import React, { Component } from 'react'
import './App.css'

import Container from './components/Container'
import Input from './components/Input'
import ToDoList from './components/ToDoList'
import ToDoListItem from './components/ToDoListItem'
import Button from './components/Button'
import Counter from './components/Counter'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      toDos: [],
      completedItems: []
    }

    this.inputRef = null
    this.addTodo = this.addTodo.bind(this)
    this.toggleCompleted = this.toggleCompleted.bind(this)
  }

  addTodo(e) {
    e.preventDefault()
    if (this.inputRef.value) {
      const newToDo = {
        text: this.inputRef.value,
      }
      this.setState({
        toDos: this.state.toDos.concat([newToDo])
      })
      this.inputRef.value = ''
    }
  }

  toggleCompleted(e, i) {
    if (e.target.type !== 'checkbox') {
      e.preventDefault()
    }
    const index = this.state.completedItems.indexOf(i)
    if (index === -1) {
      this.setState({
        completedItems: this.state.completedItems.concat([i])
      })
    } else {
      this.setState({
        completedItems: this.state.completedItems.filter((item) => (item !== i))
      })
    }
  }

  render() {
    return (
      <Container>
        <h1>React To Do App</h1>
        <div className="input-container">
          <form onSubmit={ this.addTodo }>
            <Input
              name="todoinput"
              placeholder="What do you need to do?"
              inputRef={ dom => this.inputRef = dom }
            />
            <Button
              text="Add"
            />
          </form>
        </div>
        <ToDoList>
          { this.state.toDos.map((toDo, i) => (
            <ToDoListItem
              key={ i }
              text={ toDo.text }
              onClick={ (e) => this.toggleCompleted(e, i) }
              completed={ this.state.completedItems.indexOf(i) !== -1 }
            />
          )) }
        </ToDoList>
        <Counter
          completed={ this.state.completedItems.length }
          total={ this.state.toDos.length }
        />
      </Container>
    )
  }
}

export default App;
