import React from 'react';
import PropTypes from 'prop-types';

export const TodoList = (props) => (
  <ul className='todo-list'>
    {props.todoItems.map(item => (
      <li>{item.name}</li>
    ))}
  </ul>
);

TodoList.propTypes = {
  todoItems: PropTypes.array.isRequired,
};
