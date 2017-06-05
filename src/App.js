import React, { Component } from 'react';
import './App.css';
import {TodoInput} from './components/TodoInput';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newTodo: '',
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
      </div>
    );
  }
}

export default App;
