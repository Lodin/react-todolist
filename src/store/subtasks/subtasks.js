import {List} from 'immutable';
import todo from './subtask';
import * as subtaskAdd from './subtask-add';
import * as subtaskEdit from './subtask-edit';
import * as subtaskMove from './subtask-move';
import * as subtaskRemove from './subtask-remove';
import * as subtaskToggle from './subtask-toggle';

const initial = new List();

const subtasks = (state = initial, action) => {
  switch (action.type) {
    case subtaskAdd.type:
      return state.push(todo(undefined, action));
    case subtaskEdit.type:
    case subtaskMove.type:
    case subtaskToggle.type:
      return state.map(item => todo(item, action));
    case subtaskRemove.type:
      return subtaskRemove.handler(state, action);
    default:
      return state;
  }
};

export default subtasks;
