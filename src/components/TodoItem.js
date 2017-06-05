import React from 'react';
import PropTypes from 'prop-types';

export const TodoItem = (props) => (
  <li>
    <button
      className='btn btn-danger btn-xs remove-item'
      onClick={() => props.handleRemove(props.id)}>
      <span className='glyphicon glyphicon-remove'></span>
    </button>
    <input
      className='check'
      type='checkbox'
      defaultChecked={props.isDone}
    />
    {props.name}

  </li>
);

TodoItem.propTypes = {
  id: PropTypes.number.isRequired,
  isDone: PropTypes.bool,
  name: PropTypes.string.isRequired
};
