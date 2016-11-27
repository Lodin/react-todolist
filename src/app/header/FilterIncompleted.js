import React from 'react';
import {connect} from 'react-redux';
import {push} from 'react-router-redux';
import Checkbox from 'material-ui/Checkbox';
import query from '../../store/location/query';
import styles from './FilterIncompleted.scss';

const FilterIncompleted = ({location: {query}, onCheck}) => (
  <div className={styles.container}>
    <Checkbox
      label="Show active"
      checked={!!query.incompleted}
      onCheck={(_, isChecked) => onCheck(isChecked)} />
  </div>
);

const FilterIncompletedConnected = connect(
  state => ({
    location: state.routing.locationBeforeTransitions
  }),
  (dispatch, {location}) => ({
    onCheck: isChecked => dispatch(push(query(location, [
      'incompleted',
      isChecked ? 'yes' : undefined
    ])))
  })
)(FilterIncompleted);

export default FilterIncompletedConnected;
