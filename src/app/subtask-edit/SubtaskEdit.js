import React, {Component} from 'react';
import {connect} from 'react-redux';
import {push} from 'react-router-redux';
import Checkbox from 'material-ui/Checkbox';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

import path from '../../store/location/path';
import subtaskEdit from '../../store/subtasks/subtask-edit';
import styles from './SubtaskEdit.scss';

/**
 *
 * @param props {title, description, isCompleted, onSave, onCancel}
 */
class SubtaskEdit extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: this.props.title,
      description: this.props.description,
      isCompleted: this.props.isCompleted
    };

    this.onTitleInput = ::this.onTitleInput;
    this.onDescriptionInput = ::this.onDescriptionInput;
    this.onComplete = ::this.onComplete;
  }

  onTitleInput(event) {
    this.setState({
      ...this.state,
      title: event.target.value
    });
  }

  onDescriptionInput(event) {
    this.setState({
      ...this.state,
      description: event.target.value
    });
  }

  onComplete(_, isChecked) {
    this.setState({
      ...this.state,
      isCompleted: isChecked
    });
  }

  render() {
    return (
      <div className={styles.container}>
        <div className={styles.buttons}>
          <div>
            <RaisedButton
              label="Save changes"
              primary={true}
              onClick={() => this.props.onSave(this.state)}/>
          </div>
          <div>
            <FlatButton
              label="Cancel"
              onClick={this.props.onCancel}/>
          </div>
        </div>
        <div>
          <TextField
            floatingLabelText="Title"
            hintText="Enter subtask's title"
            value={this.state.title}
            onChange={this.onTitleInput}
            fullWidth={true}/>
        </div>
        <div>
          <Checkbox
            checked={this.state.isCompleted}
            onCheck={this.onComplete}/>
        </div>
        <div>
          <TextField
            floatingLabelText="Description"
            hintText="Enter subtask's description"
            value={this.state.description}
            onChange={this.onDescriptionInput}
            fullWidth={true}
            multiLine={true}/>
        </div>
      </div>
    );
  }
}

const SubtaskEditConnected = connect(
  (state, ownProps) => {
    const subtask = state.subtasks.find(subtask => subtask.id === ownProps.params.subtaskId);

    return {
      title: subtask.title,
      description: subtask.description,
      isCompleted: subtask.completed
    };
  },
  (dispatch, ownProps) => ({
    onSave: ({title, description, isCompleted}) => {
      dispatch(subtaskEdit(ownProps.params.subtaskId, title, description, isCompleted));
      dispatch(push(path(ownProps.location, `/tasks/${ownProps.params.taskId}`)))
    },
    onCancel: () => dispatch(push(path(ownProps.location, `/tasks/${ownProps.params.taskId}`)))
  })
)(SubtaskEdit);

export default SubtaskEditConnected;
