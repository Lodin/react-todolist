const name = 'TODO_TOGGLE';

const action = id => ({
  type: name,
  id
});

const handler = (state, id) => state.id === id
  ? state.set('completed', !state.completed)
  : state;

export default action;

export {
  name,
  handler
};
