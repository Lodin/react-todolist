const type = 'SUBTASK_EDIT';

const action = (id, title, description, completed) => ({
  type,
  id,
  title,
  description,
  completed
});

const handler = (state, {payload: {id, title, description, completed}}) =>
  state.id === id ? state.withMutations((s) => {
    s
      .set('title', title)
      .set('description', description)
      .set('completed', completed);
  }) : state;

export default action;
export {
  type,
  handler
};
