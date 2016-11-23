import {Map as ImmutableMap} from 'immutable';
import * as subtaskAdd from './subtask-add';
import * as subtaskEdit from './subtask-edit';
import * as subtaskMove from './subtask-move';
import * as subtaskToggle from './subtask-toggle';

const initial = new ImmutableMap({
  id: 0,
  title: '',
  description: '',
  categoryId: -1,
  completed: false
});

const subtask = (state = initial, action) => {
  switch (action.type) {
    case subtaskAdd.type:
      return subtaskAdd.handler(state, action);
    case subtaskEdit.type:
      return subtaskEdit.handler(state, action);
    case subtaskMove.type:
      return subtaskMove.handler(state, action);
    case subtaskToggle.type:
      return subtaskToggle.handler(state, action);
    default:
      return state;
  }
};

export default subtask;
