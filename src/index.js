import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './files';
import theme from './config/theme';
import {store, history} from './store';
import App from './app/App';

injectTapEventPlugin();

ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider muiTheme={theme}>
      <App history={history} />
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('root')
);
