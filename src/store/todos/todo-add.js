import {TODO_ADD} from './actions';

let id = 0;
const todoAdd = title => ({
  type: TODO_ADD,
  id: id++,
  title,
  categoryId
});
export default todoAdd;
