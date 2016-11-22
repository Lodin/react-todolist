const name = 'TODO_ADD';

let id = 0;
const action = (title, categoryId) => ({
  type: name,
  id: id++,
  title,
  categoryId
});

const handler = (state, {id, title, categoryId}) => state.withMutations((s) => {
  s.set('id', id).set('title', title).set('categoryId', categoryId);
});

export default action;

export {
  name,
  handler
};
