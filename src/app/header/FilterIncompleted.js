import React from 'react';
import {connect} from 'react-redux';
import {push} from 'react-router-redux';
import Checkbox from 'material-ui/Checkbox';
import query from '../../store/location/query';
import styles from './FilterIncompleted.scss';

const FilterIncompleted = ({location, onCheck}) => (
  <div className={styles.container}>
    <Checkbox
      label="Show active"
      checked={!!location.query.incompleted}
      onCheck={(_, isChecked) => onCheck(isChecked, location)} />
  </div>
);

const FilterIncompletedConnected = connect(
  state => ({
    location: state.routing.locationBeforeTransitions
  }),
  dispatch => ({
    onCheck: (isChecked, location) => dispatch(push(query(location, [
      'incompleted',
      isChecked ? 'yes' : undefined
    ])))
  })
)(FilterIncompleted);

export default FilterIncompletedConnected;
