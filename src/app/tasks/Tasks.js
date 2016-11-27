import React, {Component} from 'react';
import {connect} from 'react-redux';
import {push} from 'react-router-redux';
import {List, ListItem} from 'material-ui/List';
import path from '../../store/location/path';
import subtaskHasText from '../../store/subtasks/utils/subtask-has-text';
import Task from './Task';
import TaskAddField from './TaskAddField';
import styles from './Tasks.scss';

class Tasks extends Component {
  hasIncompletedSubtasks(taskId) {
    return this.props.subtasks
      .reduce((acc, subtask) =>
        subtask.taskId === taskId && !subtask.completed
          ? acc + 1
          : acc, 0) > 0;
  }

  hasMatchingSubtasks(taskId) {
    return this.props.subtasks
      .reduce((acc, subtask) =>
        subtask.taskId === taskId && subtaskHasText(subtask, this.props.location.query.q)
          ? acc + 1
          : acc, 0) > 0;
  }

  filter(id) {
    const incompleted = this.props.location.query.incompleted;
    const search = this.props.location.query.q;

    return this.props.tasks
      .filter(task =>
        task.parentId === id
        && (incompleted ? this.hasIncompletedSubtasks(task.id) : true)
        && (search
          ? (task.title.search(search) !== -1 || this.hasMatchingSubtasks(task.id))
          : true)
      );
  }

  fill(id = null) {
    return this.filter(id)
      .map(task =>
        <ListItem
          key={task.id}
          onClick={() => this.props.onSelect(task.id)}
          nestedItems={this.fill(task.id)}>
          <Task
            id={task.id}
            title={task.title}/>
        </ListItem>
      );
  }

  render() {
    return (
      <div className={styles.container}>
        <aside className={styles.sidebar}>
          <div className={styles.add}>
            <TaskAddField />
          </div>
          <div className={styles.list}>
            <List>
              {this.fill()}
            </List>
          </div>
        </aside>
        <main className={styles.main}>
          {this.props.children}
        </main>
      </div>
    );
  }
}

const TasksConnected = connect(
  state => ({
    tasks: state.tasks,
    subtasks: state.subtasks
  }),
  (dispatch, {location}) => ({
    onSelect: id => dispatch(push(path(location, `/tasks/${id}`)))
  })
)(Tasks);

export default TasksConnected;
