import { EMPLOYEES_FETCH_SUCCESS } from '../actions';

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EMPLOYEES_FETCH_SUCCESS:
      console.log('emp reducer fetch success ', action);
      return action.payload; // return a list of employee object with key is id, value is obj
    default:
      return state;
  }
};
