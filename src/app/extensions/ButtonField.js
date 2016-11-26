import React, {Component} from 'react';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import {isEnterKey} from '../../utils/checkers';
import styles from './ButtonField.scss';

/**
 * @param props {name, onAdd}
 */
class ButtonField extends Component {
  constructor(props) {
    super(props);

    this.state = {value: ''};
    this.onInput = ::this.onInput;
    this.onAdd = ::this.onAdd;
  }

  onInput(event) {
    this.setState({value: event.target.value});
  }

  onAdd() {
    this.props.onAdd(this.state.value);
    this.setState({value: ''});
  }

  render() {
    return (
      <div className={styles.container}>
        <div>
          <TextField
            hintText={this.props.placeholder}
            name={this.props.name}
            value={this.state.value}
            onChange={this.onInput}
            onKeyUp={
              event =>
                isEnterKey(event.keyCode)
                  ? this.onAdd()
                  : null
            }/>
        </div>
        <div>
          <FlatButton
            label={this.props.label}
            onClick={this.onAdd} />
        </div>
      </div>
    );
  }
}

export default ButtonField;
