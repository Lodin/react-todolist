const type = 'SUBTASK_ADD';

let id = 0;
const action = (title, taskId) => ({
  type,
  id: id++,
  title,
  taskId
});

const handler = (state, {id, title, taskId}) =>
  state.withMutations((s) => {
    s
      .set('id', id)
      .set('title', title)
      .set('taskId', taskId);
  });

export default action;

export {
  type,
  handler
};
