const type = 'SUBTASK_TOGGLE';

const action = id => ({
  type,
  id
});

const handler = (state, id) => state.id === id
  ? state.set('completed', !state.completed)
  : state;

export default action;

export {
  type,
  handler
};
