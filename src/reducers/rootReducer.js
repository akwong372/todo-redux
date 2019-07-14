import { combineReducers } from 'redux';
import visibilityFilter from './visibilityFilterReducer';
import todos from './todosReducer';

const todoApp = combineReducers({
  visibilityFilter,
  todos
})

export default todoApp;