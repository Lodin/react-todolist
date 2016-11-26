import React from 'react';
import {Provider} from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import theme from '../config/theme';
import App from './App';

const AppRoot = ({store, history}) => (
  <Provider store={store}>
    <MuiThemeProvider muiTheme={theme}>
      <App history={history} />
    </MuiThemeProvider>
  </Provider>
);

export default AppRoot;
