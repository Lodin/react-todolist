import {Map as ImmutableMap} from 'immutable';
import * as taskAdd from './task-add';
import * as taskAddNested from './task-add-nested';
import * as taskEdit from './task-edit';
import * as taskToggle from './task-toggle';

const initial = new ImmutableMap({
  id: 0,
  title: '',
  parentId: null,
  expanded: false
});

const task = (state = initial, action) => {
  switch (action.type) {
    case taskAdd.type:
      return taskAdd.handler(state, action);
    case taskAddNested.type:
      return taskAddNested.handler(state, action);
    case taskEdit.type:
      return taskEdit.handler(state, action);
    case taskToggle.type:
      return taskToggle.handler(state, action);
    default:
      return state;
  }
};

export default task;
