import React from 'react';
import {connect} from 'react-redux';
import {List, ListItem} from 'material-ui/List';
import Subtask from './Subtask';
import SubtaskAddField from './SubtaskAddField';
import styles from './Subtasks.scss';

const Subtasks = ({subtasks, params: {taskId}}) => (
  <div className={styles.container}>
    <div className={styles.add}>
      <SubtaskAddField taskId={parseInt(taskId, 10)}/>
    </div>
    <div className={styles.list}>
      <List>
        {
          subtasks
            .filter(subtask => subtask.taskId === parseInt(taskId, 10))
            .map(subtask => (
              <ListItem key={subtask.id}>
                <Subtask
                  id={subtask.id}
                  taskId={taskId}
                  title={subtask.title}/>
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
