const type = 'TASK_TOGGLE';

const action = id => ({
  type,
  id
});

const handler = (state, {id}) =>
  state.id === id
    ? ({...state, expanded: !state.expanded})
    : state;

export default action;

export {
  type,
  handler
};
