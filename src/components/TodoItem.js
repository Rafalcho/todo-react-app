import React from 'react';
import PropTypes from 'prop-types';

export const TodoItem = (props) => (
  <li>
    <input
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