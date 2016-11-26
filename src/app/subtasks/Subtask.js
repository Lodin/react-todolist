import React from 'react';
import {connect} from 'react-redux';
import {push} from 'react-router-redux';
import Checkbox from 'material-ui/Checkbox';
import EditIcon from 'material-ui/svg-icons/image/edit';
import IconButton from 'material-ui/IconButton';
import RemoveIcon from 'material-ui/svg-icons/action/delete-forever';
import classNames from 'classnames';
import path from '../../store/location/path';
import subtaskRemove from '../../store/subtasks/subtask-remove';
import subtaskToggle from '../../store/subtasks/subtask-toggle';
import styles from './Subtask.scss';

const Subtask = ({id, taskId, title, isCompleted, location, onEdit, onToggle, onRemove}) => (
  <div className={classNames(styles.container, {
    [styles.completed]: isCompleted
  })}>
    <div className={styles.main}>
      <div>
        <Checkbox
          checked={isCompleted}
          onCheck={() => onToggle(id)}/>
      </div>
      <div className={styles.title}>
        {title}
      </div>
    </div>
    <div className={styles.actions}>
      <div className={styles.iconButton}>
        <IconButton onClick={() => onEdit(location, id, taskId)}>
          <EditIcon />
        </IconButton>
      </div>
      <div className={styles.iconButton}>
        <IconButton onClick={() => onRemove(id)}>
          <RemoveIcon/>
        </IconButton>
      </div>
    </div>
  </div>
);

const SubtaskConnected = connect(
  state => ({
    location: state.routing.locationBeforeTransitions
  }),
  dispatch => ({
    onEdit: (location, id, taskId) =>
      dispatch(push(path(location, `/tasks/${taskId}/subtask/${id}`))),
    onToggle: id => dispatch(subtaskToggle(id)),
    onRemove: id => dispatch(subtaskRemove(id))
  })
)(Subtask);

export default SubtaskConnected;
