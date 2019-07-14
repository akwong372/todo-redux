import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions/addTodo';

let AddTodo = ({ dispatch }) => {
  let input;

  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault();
          if (!input.value.trim()) {//test if value is empty string
            return
          }
          dispatch(addTodo(input.value));//send value to action creator
          input.value = '';//reset input field to empty
        }}
      >
        <input
          ref={node => {
            input = node
          }}
        />
        <button type="submit">Add Todo</button>
      </form>
    </div>
  )
};

AddTodo = connect()(AddTodo);

export default AddTodo;