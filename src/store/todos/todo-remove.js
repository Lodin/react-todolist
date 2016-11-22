const name = 'TODO_REMOVE';

const action = id => ({
  type: name,
  id
});

const handler = (state, {id}) => state.filter(item => item.id !== id);

export default action;

export {
  name,
  handler
};
