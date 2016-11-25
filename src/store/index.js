import {createStore, combineReducers, applyMiddleware} from 'redux';
import {browserHistory} from 'react-router';
import {syncHistoryWithStore, routerReducer, routerMiddleware} from 'react-router-redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import tasks from './tasks';
import subtasks from './subtasks';

const middleware = applyMiddleware(
  routerMiddleware(browserHistory)
);

const store = createStore(
  combineReducers({
    tasks,
    subtasks,
    routing: routerReducer
  }),
  composeWithDevTools(middleware)
);

const history = syncHistoryWithStore(browserHistory, store);

export {
  store,
  history
}
