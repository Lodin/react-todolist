import {TODO_EDIT} from './actions';

const todoEdit = (id, title, description, categoryId) => ({
  type: TODO_EDIT,
  id,
  title,
  description,
  categoryId
});
export default todoEdit;
