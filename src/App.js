import React, { Component } from 'react';
import './App.css';
import {TodoInput} from './components/TodoInput';
import {TodoList} from './components/TodoList';
import {addTodo, generateNumber, deleteTodo, updateItem} from './utils/actions';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newTodo: '',
      todoItems: [
        {id: 1, name: 'first', isDone: false},
        {id: 2, name: 'second', isDone: false},
        {id: 3, name: 'third', isDone: true}
      ],
    }
  }

  handleInputChange = (event) => {
    event.preventDefault();
    this.setState({
      newTodo: event.target.value
    })
  };

  handleSubmit = (event) => {
    if (this.state.newTodo) {
      event.preventDefault();

      const id = generateNumber();
      const newTodo = {
        id,
        name: this.state.newTodo,
        isDone: false,
      }
      const updatedTodoList = addTodo(this.state.todoItems, newTodo);

      this.setState({
        newTodo: '',
        todoItems: updatedTodoList,
      })
    } else {
      event.preventDefault();
    }

  };

  handleRemove = (id, event) => {
    const updatedTodos = deleteTodo(this.state.todoItems, id);
    this.setState({todoItems: updatedTodos})
  };

  handleToggle = (id) => {
    const updatedTodos = updateItem(this.state.todoItems, id);
    this.setState({
      todoItems: updatedTodos
    })
  }

  render() {
    return (
      <div className='App'>
        <h1 className='header'>Todo App</h1>
        <TodoInput
          newTodo={this.state.newTodo}
          handleInputChange={this.handleInputChange}
          handleSubmit={this.handleSubmit}
        />
      <TodoList
        todoItems={this.state.todoItems}
        handleRemove={this.handleRemove}
        handleToggle={this.handleToggle}
      />
      </div>
    );
  }
}

export default App;
