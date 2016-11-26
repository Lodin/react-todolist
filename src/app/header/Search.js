import React from 'react';
import {connect} from 'react-redux';
import {push} from 'react-router-redux';
import query from '../../store/location/query';
import ClearableTextField from '../extensions/ClearableTextField';

const Search = ({location, onEnter, onCancel}) => (
  <ClearableTextField
    name="search"
    value={location.query.q}
    onEnter={search => onEnter(location, search)}
    onCancel={() => onCancel(location)} />
);

const SearchConnected = connect(
  state => ({
    location: state.routing.locationBeforeTransitions
  }),
  dispatch => ({
    onEnter: (location, search) => dispatch(push(query(location, ['q', search]))),
    onCancel: location => dispatch(push(query(location, ['q', undefined])))
  })
)(Search);

export default SearchConnected;
