const type = 'TASK_TOGGLE';

const action = id => ({
  type,
  id
});

const handler = (state, {id}) =>
  state.id === id
    ? state.set('expanded', !state.get('expanded'))
    : state;

export default action;

export {
  type,
  handler
};
