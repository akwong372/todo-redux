import {
  ADD_TODO,
  TOGGLE_TODO
} from '../actions/actionTypes';

function todos(state = [], action) {
  switch (action.type) {
    case ADD_TODO:
      return Object.assign({}, state, {
        todos: [
          ...state.todos,
          {
            text: action.text,
            completed: false
          }
        ]
      });

    case TOGGLE_TODO:
      return Object.assign({}, state, {
        todos: state.todos.map((todo, index) => {//iterate through array
          if (index === action.index) {
            return Object.assign({}, todo, {
              completed: !todo.completed //set completed to opposite if indices match
            });
          }
        })
      });

    default:
      return state;
  }
}

export default todos;