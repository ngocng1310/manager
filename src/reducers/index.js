import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import EmployeeFormReducer from './EmployeeFormReducer';
import EmployeeReducer from './EmployeeReducer';

export default combineReducers({
  auth: AuthReducer, // key auth is the prop of state
  employeeForm: EmployeeFormReducer,
  employees: EmployeeReducer
});
