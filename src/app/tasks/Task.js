import React, {Component} from 'react';
import {connect} from 'react-redux';
import {push} from 'react-router-redux';
import AddIcon from 'material-ui/svg-icons/content/add';
import AttachIcon from 'material-ui/svg-icons/content/reply';
import EditIcon from 'material-ui/svg-icons/image/edit';
import IconButton from 'material-ui/IconButton';
import RemoveIcon from 'material-ui/svg-icons/action/delete-forever';
import TextField from 'material-ui/TextField';

import path from '../../store/location/path';
import taskAddNested from '../../store/tasks/task-add-nested';
import taskEdit from '../../store/tasks/task-edit';
import taskRemove from '../../store/tasks/task-remove';
import subtaskAttach from '../../store/subtasks/subtask-attach';
import {isEnterKey} from '../../utils/checkers';
import styles from './Task.scss';

const btnStyles = {
  icon: {
    width: 16,
    height: 16
  },
  button: {
    width: 32,
    height: 32,
    padding: 8
  }
};

/**
 * @param props {id, title, onAddNested, onEdit, onRemove, onSelect}
 */
class Task extends Component {
  state;

  constructor(props) {
    super(props);

    this.state = {
      title: props.title,
      edit: false
    };

    this.onInput = ::this.onInput;
    this.onChangeEdit = ::this.onChangeEdit;
  }

  onInput(event) {
    this.setState({
      ...this.state,
      title: event.target.value
    });
  }

  onChangeEdit() {
    this.setState({
      ...this.state,
      edit: !this.state.edit
    });
  }

  attachActions() {
    return (
      <div className={styles.actions}>
        <div className={styles.iconButtonWrapper}>
          <div className={styles.iconButton}>
            <IconButton
              style={btnStyles.button}
              iconStyle={btnStyles.icon}
              onClick={() => this.props.onAttach(this.props.id)}>
              <AttachIcon/>
            </IconButton>
          </div>
        </div>
      </div>
    );
  }

  commonAction() {
    return (
      <div className={styles.actions}>
        <div className={styles.iconButtonWrapper}>
          <div className={styles.iconButton}>
            <IconButton
              style={btnStyles.button}
              iconStyle={btnStyles.icon}
              onClick={this.props.onRemove}>
              <RemoveIcon/>
            </IconButton>
          </div>
        </div>
        <div className={styles.iconButtonWrapper}>
          <div className={styles.iconButton}>
            <IconButton
              style={btnStyles.button}
              iconStyle={btnStyles.icon}
              onClick={this.props.onAddNested}>
              <AddIcon/>
            </IconButton>
          </div>
        </div>
      </div>
    );
  }

  render() {
    return (
      <div className={styles.container}>
        <div className={styles.main}>
          <div className={styles.title}>{
            this.state.edit ? (
              <TextField
                name={`task-title-${this.props.id}`}
                value={this.state.title}
                onChange={this.onInput}
                onKeyUp={
                  event =>
                    isEnterKey(event.keyCode)
                      ? this.onChangeEdit()
                      : null
                }/>
            ) : this.state.title
          }</div>
          <div className={styles.iconButtonWrapper}>
            <div className={styles.iconButton}>
              <IconButton
                style={btnStyles.button}
                iconStyle={btnStyles.icon}
                onClick={this.onChangeEdit}>
                <EditIcon/>
              </IconButton>
            </div>
          </div>
        </div>
        {
          this.props.isEditing
            ? this.attachActions()
            : this.commonAction()
        }
      </div>
    );
  }
}

const TaskConnected = connect(
  (state, {routeParams: {subtaskId}}) => ({
    isEditing: !!subtaskId
  }),
  (dispatch, {id, routeParams: {subtaskId}}) => ({
    onAddNested: () => dispatch(taskAddNested(id)),
    onAttach: (id) => {
      dispatch(push(path(`task/${id}`)));
      dispatch(subtaskAttach(subtaskId, id));
    },
    onEdit: title => dispatch(taskEdit(title)),
    onRemove: () => dispatch(taskRemove(id))
  })
)(Task);

export default TaskConnected;
