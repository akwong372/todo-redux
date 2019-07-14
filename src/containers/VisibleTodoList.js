import { connect } from 'react-redux';
import { toggleTodo } from '../actions/toggleTodo';
import TodoList from '../components/TodoList';

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return todos;

    case 'SHOW_COMPLETED':
      return todos.filter(t => t.completed);

    case 'SHOW_ACTIVE':
      return todos.filter(t => !t.completed);
  }
};

const mapStateToProps = state => {//map state from store to props in this container component
  return {
    todos: getVisibleTodos(state.todos, state.visibilityFilter)//the todos prop
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onTodoClick: id => {//prop from TodoList
      dispatch(toggleTodo(id));//call action creator with id
    }
  };
};

const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);

export default VisibleTodoList;