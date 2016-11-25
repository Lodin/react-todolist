const type = 'SUBTASK_EDIT';

const action = (id, title, description, completed) => ({
  type,
  id,
  title,
  description,
  completed
});

const handler = (state, {id, title, description, completed}) =>
  state.id === id ? {
    ...state,
    id,
    title,
    description,
    completed
  } : state;

export default action;
export {
  type,
  handler
};
