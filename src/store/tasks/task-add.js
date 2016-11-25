import {v4 as createUuid} from 'node-uuid';

const type = 'TASK_ADD';

const action = title => ({
  type,
  title
});

const handler = (state, {title}) => ({
  ...state,
  id: createUuid(),
  title
});

export default action;

export {
  type,
  handler
};
