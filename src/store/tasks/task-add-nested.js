import {handler as add} from './task-add';

const type = 'TASK_ADD_NESTED';

const action = parentId => ({
  type,
  parentId
});

const handler = (state, {parentId}) => ({
  ...add(state, {}),
  title: 'Nested Task',
  parentId
});

export default action;

export {
  type,
  handler
};
