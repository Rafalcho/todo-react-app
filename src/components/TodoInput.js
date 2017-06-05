import React from 'react';
import PropTypes from 'prop-types';

export const TodoInput = (props) => (
  <form onSubmit={props.handleSubmit}>
    <input
      className='add-input'
      type='text'
      value={props.newTodo}
      onChange={props.handleInputChange}
    />
  <input
    type='submit'
    value='Add'
    className='btn btn-primary'/>

  </form>
);

TodoInput.propTypes = {
  newTodo: PropTypes.string.isRequired,
  handleInputChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};
