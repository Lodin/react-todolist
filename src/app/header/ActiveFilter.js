import React from 'react';
import {connect} from 'react-redux';
import Checkbox from 'material-ui/Checkbox';
import styles from './ActiveFilter.scss';

const ActiveFilter = ({onCheck}) => (
  <div className={styles.container}>
    <Checkbox
      label="Show active"
      onCheck={(_, isChecked) => onCheck(isChecked)} />
  </div>
);

const ActiveFilterConnected = connect(
  null,
  dispatch => ({
    onCheck: isChecked => dispatch(null)
  })
)(ActiveFilter);

export default ActiveFilterConnected;
