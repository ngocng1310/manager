import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';

export default combineReducers({
  auth: AuthReducer // key auth is the prop of state
});
