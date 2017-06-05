import React, { Component } from 'react';
import './App.css';
import {TodoInput} from './components/TodoInput';
import {TodoList} from './components/TodoList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newTodo: '',
      todoItems: [
        {id: 1, name: 'first', isDone: false},
        {id: 2, name: 'second', isDone: false},
        {id: 3, name: 'third', isDone: false}
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
    event.preventDefault();
  }

  render() {
    return (
      <div className='App'>
        <TodoInput
          newTodo={this.state.newTodo}
          handleInputChange={this.handleInputChange}
          handleSubmit={this.handleSubmit}
        />
      <TodoList
        todoItems={this.state.todoItems}
      />
      </div>
    );
  }
}

export default App;
