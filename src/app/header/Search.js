import React from 'react';
import {connect} from 'react-redux';
import {push} from 'react-router-redux';
import query from '../../store/location/query';
import ClearableTextField from '../extensions/ClearableTextField';

const Search = ({location: {query}, onEnter, onCancel}) => (
  <ClearableTextField
    name="search"
    value={query.q}
    onEnter={onEnter}
    onCancel={onCancel} />
);

const SearchConnected = connect(
  state => ({
    location: state.routing.locationBeforeTransitions
  }),
  (dispatch, {location}) => ({
    onEnter: search => dispatch(push(query(location, ['q', search]))),
    onCancel: () => dispatch(push(query(location, ['q', undefined])))
  })
)(Search);

export default SearchConnected;
