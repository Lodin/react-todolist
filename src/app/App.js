import React, {Component} from 'react';
import {connect} from 'react-redux';
import {push} from 'react-router-redux';
import {Router, Route, Redirect} from 'react-router';

import SubtaskEdit from './subtask-edit/SubtaskEdit';
import Subtasks from './subtasks/Subtasks';
import Tasks from './tasks/Tasks';
import Layout from './Layout';

class App extends Component {
  routes = (
    <Router history={this.props.history}>
      <Redirect from="/" to="tasks" />
      <Route path="/" component={Layout}>
        <Route path="tasks" component={Tasks}>
          <Route path=":taskId" component={Subtasks}/>
          <Route path=":taskId/subtask/:subtaskId" component={SubtaskEdit}/>
        </Route>
      </Route>
    </Router>
  );

  componentDidMount() {
    if (this.props.tasksCount === 0) {
      this.props.onTaskEmpty();
    }
  }

  render() {
    return this.routes;
  }
}

const AppConnected = connect(
  state => ({
    tasksCount: state.tasks.length
  }),
  dispatch => ({
    onTaskEmpty: () => dispatch(push('/tasks'))
  })
)(App);

export default AppConnected;
