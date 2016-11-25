import React from 'react';
import {connect} from 'react-redux';
import {push} from 'react-router-redux';
import ClearableTextField from '../extensions/ClearableTextField';

const Search = ({onEnter, onCancel}) => (
  <ClearableTextField
    name="search"
    onEnter={onEnter}
    onCancel={onCancel} />
);

const SearchConnected = connect(
  null,
  dispatch => ({
    onEnter: searchText => dispatch(push(`/filter/${searchText}`)),
    onCancel: () => dispatch(push('/tasks'))
  })
)(Search);

export default SearchConnected;
