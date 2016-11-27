const type = 'SUBTASK_MOVE';

const action = (id, taskId) => ({
  type,
  id,
  taskId
});

const handler = (state, {id, taskId}) =>
  state.id === id
    ? {...state, taskId}
    : state;

export default action;

export {
  type,
  handler
};
