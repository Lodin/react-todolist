import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import theme from '../config/theme';
import Header from './header/Header';
import styles from './App.scss';

const App = () => (
  <MuiThemeProvider muiTheme={theme}>
    <div className={styles.container}>
      <header>
        <Header />
      </header>
    </div>
  </MuiThemeProvider>
);

export default App;
