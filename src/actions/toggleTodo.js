import {TOGGLE_TODO} from './actionTypes';

export const toggleTodo = (index) => ({
  type: TOGGLE_TODO,
  index
});