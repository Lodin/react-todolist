import {handler as taskAddHandler} from './task-add';

const type = 'TASK_ADD_NESTED';

const action = parentId => ({
  type,
  parentId
});

const handler = (state, {parentId}) =>
  taskAddHandler(state, {})
    .withMutations((s) => {
      s
        .set('title', `Nested Task #${s.get('id')}`)
        .set('parentId', parentId)
    });

export default action;

export {
  type,
  handler
};
