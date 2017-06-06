import React from 'react';
import PropTypes from 'prop-types';
import {TodoItem} from './TodoItem';

export const TodoList = (props) => (
  <ul className='todo-list'>
    {props.todoItems.map(item => (
      <TodoItem
        key={item.id}
        id={item.id}
        name={item.name}
        isDone={item.isDone}
        handleRemove={props.handleRemove}
        handleToggle={props.handleToggle}
      />
    ))}
  </ul>
);

TodoList.propTypes = {
  todoItems: PropTypes.array.isRequired,
};
