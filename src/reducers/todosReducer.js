import {
  ADD_TODO,
  TOGGLE_TODO
} from '../actions/actionTypes';

function todos(state = [], action) {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false
        }
      ];

    case TOGGLE_TODO:
      return state.map((todo, index) => //iterate through array
        index === action.index ? { ...todo, completed: !todo.completed } : todo
      );
    //set completed to opposite if indices match

    default:
      return state;
  }
}

export default todos;