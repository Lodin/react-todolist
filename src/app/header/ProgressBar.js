import React from 'react';
import LinearProgress from 'material-ui/LinearProgress';
import styles from './ProgressBar.scss';

const ProgressBar = ({completed}) => (
  <div className={styles.container}>
    <LinearProgress mode="determinate" value={completed} />
  </div>
);

export default ProgressBar;
