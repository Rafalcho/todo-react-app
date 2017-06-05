import React from 'react';
import PropTypes from 'prop-types';

export const TodoInput = (props) => (
  <form onSubmit={props.handleSubmit}>
    <input
      type='text'
      value={props.newTodo}
      onChange={props.handleInputChange}
    />
  <input type='submit' value='Add'/>

  </form>
);

TodoInput.propTypes = {
  newTodo: PropTypes.string.isRequired,
  handleInputChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};
