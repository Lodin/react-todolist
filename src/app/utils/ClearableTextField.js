import React from 'react';
import IconButton from 'material-ui/IconButton'
import TextField from 'material-ui/TextField';
import CancelIcon from 'material-ui/svg-icons/navigation/cancel';
import styles from './ClearableTextField.scss';

const ClearableTextField = () => (
  <div className={styles.container}>
    <div className={styles.field}>
      <TextField id="1" />
    </div>
    <div className={styles.cancel}>
      <IconButton tooltip="Cancel">
        <CancelIcon />
      </IconButton>
    </div>
  </div>
);

export default ClearableTextField;
