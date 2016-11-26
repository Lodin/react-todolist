import React, {Component} from 'react';
import IconButton from 'material-ui/IconButton'
import TextField from 'material-ui/TextField';
import CancelIcon from 'material-ui/svg-icons/navigation/cancel';
import {isEnterKey} from '../../utils/checkers';
import styles from './ClearableTextField.scss';

/**
 * @param props {name, onEnter, onCancel}
 */
class ClearableTextField extends Component {
  constructor(props) {
    super(props);
    this.state = {search: this.props.value || ''};

    this.onInput = ::this.onInput;
    this.onCancel = ::this.onCancel;
  }

  onInput(event) {
    this.setState({search: event.target.value});
  }

  onCancel() {
    this.setState({search: ''});
    this.props.onCancel();
  }

  render() {
    return (
      <div className={styles.container}>
        <TextField
          name={this.props.name}
          value={this.state.search}
          onChange={this.onInput}
          onKeyUp={
            event =>
              isEnterKey(event.keyCode)
                ? this.props.onEnter(this.state.search)
                : null
          }
        />
        <IconButton tooltip="Cancel" onClick={this.onCancel}>
          <CancelIcon />
        </IconButton>
      </div>
    );
  }
}

export default ClearableTextField;
