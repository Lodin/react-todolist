import React from 'react';
import {connect} from 'react-redux';
import subtaskAdd from '../../store/subtasks/subtask-add';
import ButtonField from '../extensions/ButtonField';

const SubtaskAddField = ({taskId, onAdd}) => (
  <ButtonField
    name="subtask-add"
    label="Add"
    placeholder="Enter title of your subtask"
    onAdd={title => onAdd(title, taskId)}
  />
);

const SubtaskAddFieldConnect = connect(
  null,
  dispatch => ({
    onAdd: (title, taskId) => dispatch(subtaskAdd(title, taskId))
  })
)(SubtaskAddField);

export default SubtaskAddFieldConnect;
