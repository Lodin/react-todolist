import {Map as ImmutableMap} from 'immutable';
import * as todoAdd from './todo-add';
import * as todoEdit from './todo-edit';
import * as todoMove from './todo-move';
import * as todoToggle from './todo-toggle';

const initial = new ImmutableMap({
  id: 0,
  title: '',
  description: '',
  categoryId: -1,
  completed: false
});

const todo = (state = initial, action) => {
  switch (action.type) {
    case todoAdd.name:
      return todoAdd.handler(state, action);
    case todoEdit.name:
      return todoEdit.handler(state, action);
    case todoMove.name:
      return todoMove.handler(state, action);
    case todoToggle.name:
      return todoToggle.handler(state, action);
    default:
      return state;
  }
};

export default todo;
