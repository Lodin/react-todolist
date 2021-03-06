import todo from './subtask';
import * as subtaskAdd from './subtask-add';
import * as subtaskEdit from './subtask-edit';
import * as subtaskAttach from './subtask-attach';
import * as subtaskRemove from './subtask-remove';
import * as subtaskToggle from './subtask-toggle';

const initial = [];

const subtasks = (state = initial, action) => {
  switch (action.type) {
    case subtaskAdd.type:
      return [...state, todo(undefined, action)];
    case subtaskEdit.type:
    case subtaskAttach.type:
    case subtaskToggle.type:
      return state.map(item => todo(item, action));
    case subtaskRemove.type:
      return subtaskRemove.handler(state, action);
    default:
      return state;
  }
};

export default subtasks;
