
import { LOAD_MY_ACCOUNTS, LOADING_MY_ACCOUNTS } from '../actions/actionTypes'
import { initialState } from './initialState'

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [LOAD_MY_ACCOUNTS]    : (state, action) => {
    console.log("Reducer working on event: ", action);
    let retVal = {
      accountList : action.accountList,
      nrOfResults : action.nrOfResults,
      isLoadingAccounts: false
    };
    return Object.assign({}, state, retVal);
  },
  [LOADING_MY_ACCOUNTS]    : (state, action) => {
    console.log("Reducer working on event: ", action);
    let retVal = {
      accountList : [],
      nrOfResults : 0,
      isLoadingAccounts: true
    };
    return Object.assign({}, state, retVal);
  }
}

// ------------------------------------
// Reducer
// ------------------------------------
export default function accountListReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type];
  return handler ? handler(state, action) : state;
}
