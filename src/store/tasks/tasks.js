import task from './task';
import * as taskAdd from './task-add';
import * as taskAddNested from './task-add-nested';
import * as taskEdit from './task-edit';
import * as taskRemove from './task-remove';
import * as taskToggle from './task-toggle';

const initial = [];

const tasks = (state = initial, action) => {
  switch (action.type) {
    case taskAdd.type:
      return action.title ? [...state, task(undefined, action)] : state;
    case taskAddNested.type:
      return [...state, task(undefined, action)];
    case taskEdit.type:
    case taskToggle.type:
      return state.map(item => task(item, action));
    case taskRemove.type:
      return taskRemove.handler(state, action);
    default:
      return state;
  }
};

export default tasks;
