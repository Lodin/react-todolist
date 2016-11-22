import React from 'react';
import ActiveFilter from './filter/ActiveFilter';
import Search from './filter/Search';
import ProgressBar from './ProgressBar';
import styles from './Header.scss';

const Header = () => (
  <div className={styles.container}>
    <div className={styles.main}>
      <div className={styles.logo}>To-Do List</div>
      <div className={styles.filter}>
        <ActiveFilter />
        <Search />
      </div>
    </div>
    <ProgressBar completed="50" />
  </div>
);

export default Header;
