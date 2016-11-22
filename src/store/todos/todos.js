import {List} from 'immutable';
import todo from './todo';
import {TODO_ADD, TODO_EDIT, TODO_MOVE, TODO_REMOVE, TODO_TOGGLE} from './actions';

const initial = new List();

const todos = (state = initial, action) => {
  switch (action.type) {
    case TODO_ADD:
      return state.push(todo(undefined, action));
    case TODO_EDIT:
    case TODO_MOVE:
    case TODO_TOGGLE:
      return state.map(item => todo(item, action));
    case TODO_REMOVE:
      return state.filter(item => item.id === action.id);
    default:
      return state;
  }
};

export default todos;
