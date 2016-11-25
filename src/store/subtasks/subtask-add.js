import {v4 as createUuid} from 'node-uuid';

const type = 'SUBTASK_ADD';

const action = (title, taskId) => ({
  type,
  id: createUuid(),
  title,
  taskId
});

const handler = (state, {id, title, taskId}) => ({
  ...state,
  id,
  title,
  taskId
});

export default action;

export {
  type,
  handler
};
