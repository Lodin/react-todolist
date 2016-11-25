import {handler as add} from './task-add';

const type = 'TASK_ADD_NESTED';

const action = parentId => ({
  type,
  parentId
});

const handler = (state, {parentId}) => {
  const task = add(state, {});
  return {
    ...task,
    title: `Nested Task #${task.id}`,
    parentId
  };
};

export default action;

export {
  type,
  handler
};
