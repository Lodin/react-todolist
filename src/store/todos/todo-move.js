const name = 'TODO_MOVE';

const action = (id, categoryId) => ({
  type: name,
  id,
  categoryId
});

const handler = (state, {id, categoryId}) => state.id === id
  ? state.set('categoryId', categoryId)
  : state;

export default action;

export {
  name,
  handler
};
