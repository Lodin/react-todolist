import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import './files';
import configureStore from './store';
import AppRoot from './app';

injectTapEventPlugin();

const {store, history} = configureStore();

ReactDOM.render(
  <AppRoot store={store} history={history}/>,
  document.getElementById('root')
);
