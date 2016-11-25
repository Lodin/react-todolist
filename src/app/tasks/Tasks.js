import React, {Component} from 'react';
import {connect} from 'react-redux';
import {push} from 'react-router-redux';
import {List, ListItem} from 'material-ui/List';
import Task from './Task';
import TaskAddField from './TaskAddField';
import styles from './Tasks.scss';

class Tasks extends Component {
  fill(id = null) {
    return this.props.tasks
      .filter(task => task.parentId === id)
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
    tasks: state.tasks
  }),
  dispatch => ({
    onSelect: id => dispatch(push(`/tasks/${id}`))
  })
)(Tasks);

export default TasksConnected;
