import {List} from 'immutable';
import todo from './todo';
import * as todoAdd from './todo-add';
import * as todoEdit from './todo-edit';
import * as todoMove from './todo-move';
import * as todoRemove from './todo-remove';
import * as todoToggle from './todo-toggle';

const initial = new List();

const todos = (state = initial, action) => {
  switch (action.type) {
    case todoAdd.name:
      return state.push(todo(undefined, action));
    case todoEdit.name:
    case todoMove.name:
    case todoToggle.name:
      return state.map(item => todo(item, action));
    case todoRemove.name:
      return todoRemove.handler(state, action);
    default:
      return state;
  }
};

export default todos;
