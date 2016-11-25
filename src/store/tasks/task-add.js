const type = 'TASK_ADD';

const action = title => ({
  type,
  title
});

let id = 0;
const handler = (state, {title}) => ({
  ...state,
  id: id++,
  title
});

export default action;

export {
  type,
  handler
};
