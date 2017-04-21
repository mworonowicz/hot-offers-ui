import { combineReducers } from 'redux';
const { routerReducer } = require('react-router-redux');
import loginReducer from './loginReducer'

const rootReducer = combineReducers({
  login: loginReducer,
  routing: routerReducer
});

export default rootReducer;
