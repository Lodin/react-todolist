import React from 'react';
import Checkbox from 'material-ui/Checkbox';
import styles from './ActiveFilter.scss';

const ActiveFilter = () => (
  <div className={styles.container}>
    <Checkbox label="Show active" />
  </div>
);

export default ActiveFilter;
