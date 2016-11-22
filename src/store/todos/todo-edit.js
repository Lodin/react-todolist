const name = 'TODO_EDIT';

const action = (id, title, description) => ({
  type: name,
  id,
  title,
  description
});

const handler = (state, {payload: {id, title, description}}) => state.id === id
  ? state.withMutations((s) => {
    s.set('title', title).set('description', description)
  })
  : state;

export default action;
export {
  name,
  handler
};
