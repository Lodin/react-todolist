import * as subtaskAdd from './subtask-add';
import * as subtaskEdit from './subtask-edit';
import * as subtaskAttach from './subtask-attach';
import * as subtaskToggle from './subtask-toggle';

const initial = {
  id: 0,
  title: '',
  description: '',
  taskId: -1,
  completed: false
};

const subtask = (state = initial, action) => {
  switch (action.type) {
    case subtaskAdd.type:
      return subtaskAdd.handler(state, action);
    case subtaskEdit.type:
      return subtaskEdit.handler(state, action);
    case subtaskAttach.type:
      return subtaskAttach.handler(state, action);
    case subtaskToggle.type:
      return subtaskToggle.handler(state, action);
    default:
      return state;
  }
};

export default subtask;
