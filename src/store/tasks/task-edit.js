const type = 'TASK_EDIT';

const action = title => ({
  type,
  title
});

const handler = (state, {id, title}) =>
  state.id === id
    ? ({...state, title})
    : state;

export default action;

export {
  type,
  handler
};
