import React from 'react';
import {connect} from 'react-redux';
import {List, ListItem} from 'material-ui/List';
import subtaskHasText from '../../store/subtasks/utils/subtask-has-text';
import Subtask from './Subtask';
import SubtaskAddField from './SubtaskAddField';
import styles from './Subtasks.scss';

const Subtasks = ({subtasks, params: {taskId}, location}) => (
  <div className={styles.container}>
    <div className={styles.add}>
      <SubtaskAddField taskId={taskId}/>
    </div>
    <div className={styles.list}>
      <List>
        {
          subtasks
            .filter(subtask =>
              subtask.taskId === taskId
              && (location.query.incompleted ? !subtask.completed : true)
              && (location.query.q ? subtaskHasText(location.query.q) : true)
            )
            .map(subtask => (
              <ListItem key={subtask.id}>
                <Subtask
                  id={subtask.id}
                  taskId={taskId}
                  title={subtask.title}
                  isCompleted={subtask.completed}/>
              </ListItem>
            ))
        }
      </List>
    </div>
  </div>
);

const SubtasksConnected = connect(
  state => ({
    subtasks: state.subtasks
  })
)(Subtasks);

export default SubtasksConnected;
