import {createStore, combineReducers, applyMiddleware} from 'redux';
import {browserHistory} from 'react-router';
import {syncHistoryWithStore, routerReducer, routerMiddleware} from 'react-router-redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import throttle from 'lodash/throttle';
import subtasks from './subtasks';
import tasks from './tasks';
import {saveState, loadState} from './utils/storage';

const configureStore = () => {
  const middleware = applyMiddleware(
    routerMiddleware(browserHistory)
  );

  const store = createStore(
    combineReducers({
      routing: routerReducer,
      subtasks,
      tasks
    }),
    loadState(),
    composeWithDevTools(middleware)
  );

  store.subscribe(throttle(() => {
    saveState({
      tasks: store.getState().tasks,
      subtasks: store.getState().subtasks
    })
  }, 1000));

  const history = syncHistoryWithStore(browserHistory, store);

  return {store, history};
};

export default configureStore;
