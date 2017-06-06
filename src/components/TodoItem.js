import React from 'react';
import PropTypes from 'prop-types';

export const TodoItem = (props) => {
  let isCompleted;
  props.isDone ? isCompleted = 'completed' : isCompleted = null;

  return <li className={isCompleted}>
    <button
      className='btn btn-danger btn-xs remove-item'
      onClick={() => props.handleRemove(props.id)}>
      <span className='glyphicon glyphicon-remove'></span>
    </button>
    <input
      className='check'
      type='checkbox'
      defaultChecked={props.isDone}
      onChange={() => props.handleToggle(props.id)}
    />
    {props.name}

  </li>;
};

TodoItem.propTypes = {
  id: PropTypes.number.isRequired,
  isDone: PropTypes.bool,
  name: PropTypes.string.isRequired,
  handleToggle: PropTypes.func.isRequired,
  handleRemove: PropTypes.func.isRequired,

};
