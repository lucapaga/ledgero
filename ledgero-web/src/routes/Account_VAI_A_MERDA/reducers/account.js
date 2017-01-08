import { AccountListActionTypes } from '../actions'

/*
  ============================
  REDUCER(s)
  ============================
*/
const stubbedState = {
  accountsList: [{
    accountId: "28393298"
  }, {
    accountId: "65664252"
  }]
};
const initialState = stubbedState;

export default function accountsReducer (state, action) {
  console.log("Delegating reducer. State: ", JSON.stringify(state) + ". Action: ", JSON.stringify(action));

  if(action.type === AccountListActionTypes.REFRESH_ACCOUNT_LIST) {
    console.log("Responding to " + action.type);
    return stubbedState;
  }

  console.log("Defaulting to initial state!");
  return state;
}
