const subtaskHasText = (subtask, text) =>
  subtask.title.search(text) !== -1 || subtask.description.search(text) !== -1;

export default subtaskHasText;
