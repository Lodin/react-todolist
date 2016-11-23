const type = 'TASK_ADD';

const action = title => ({
  type,
  title
});

let id = 0;
const handler = (state, {title}) =>
  state.withMutations((s) => {
    s
      .set('id', id++)
      .set('title', title);
  });

export default action;

export {
  type,
  handler
};
