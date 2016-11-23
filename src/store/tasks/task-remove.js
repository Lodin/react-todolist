const type = 'TASK_REMOVE';

const action = id => ({
  type,
  id
});

const handler = (state, {id}) =>
  state.filter(item => item.id !== id);

export default action;

export {
  type,
  handler
};
