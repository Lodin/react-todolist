import React from 'react';
import {connect} from 'react-redux';
import FilterIncompleted from './FilterIncompleted';
import ProgressBar from './ProgressBar';
import Search from './Search';
import styles from './Header.scss';

const Header = ({subtasks}) => (
  <div className={styles.container}>
    <div className={styles.row}>
      <div className={styles.title}>To-Do List</div>
      <div className={styles.filter}>
        <FilterIncompleted />
        <Search />
      </div>
    </div>
    <ProgressBar completed={
      Math.floor(
        (subtasks.reduce((acc, subtask) => subtask.completed ? acc + 1 : acc, 0)
          / subtasks.length) * 100
      )} />
  </div>
);

const HeaderConnected = connect(
  state => ({
    subtasks: state.subtasks
  })
)(Header);

export default HeaderConnected;
