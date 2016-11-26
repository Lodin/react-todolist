import React from 'react';
import FilterIncompleted from './FilterIncompleted';
import ProgressBar from './ProgressBar';
import Search from './Search';
import styles from './Header.scss';

const Header = () => (
  <div className={styles.container}>
    <div className={styles.row}>
      <div className={styles.title}>To-Do List</div>
      <div className={styles.filter}>
        <FilterIncompleted />
        <Search />
      </div>
    </div>
    <ProgressBar completed={50} />
  </div>
);

export default Header;
