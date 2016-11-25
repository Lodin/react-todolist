import React from 'react';
import {connect} from 'react-redux';
import ButtonField from '../extensions/ButtonField';
import taskAdd from '../../store/tasks/task-add';

const TaskAddField = ({onAdd}) => (
  <ButtonField
    name="task-add"
    label="Add"
    placeholder="Enter title of your task"
    onAdd={onAdd} />
);

const TaskAddFieldConnected = connect(
  null,
  dispatch => ({
    onAdd: title => dispatch(taskAdd(title))
  })
)(TaskAddField);

export default TaskAddFieldConnected;
