import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import {Router, browserHistory} from 'react-router';
import {syncHistoryWithStore } from 'react-router-redux';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import './index.css';
import routes from './routes';
import configureStore from './store';

const store = configureStore({});
const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
  <div>
    <Provider store={ store } >
      <Router history={ history } >
        { routes }
      </Router>
    </Provider>
  </div>,
  document.getElementById('root')
);
