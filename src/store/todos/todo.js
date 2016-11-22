import {Map as ImmutableMap} from 'immutable';
import {TODO_ADD, TODO_EDIT, TODO_MOVE, TODO_TOGGLE} from './actions';

const initial = new ImmutableMap({
  title: '',
  description: '',
  categoryId: -1,
  completed: false
});

const todo = (state = initial, action) => {
  switch (action.type) {
    case TODO_ADD:
      return state.withMutations((s) => {
        s.set('title', action.title).set('categoryId', action.categoryId);
      });
    case TODO_EDIT:
      return state.id === action.id ? state.withMutations((s) => {
        s.set('title', action.title).set('description', action.description)
      }) : state;
    case TODO_MOVE:
      return state.id === action.id ? state.set('categoryId', action.categoryId) : state;
    case TODO_TOGGLE:
      return state.id === action.id ? state.set('completed', !state.completed) : state;
    default:
      return state;
  }
};

export default todo;
