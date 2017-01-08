// ------------------------------------
// Constants
// ------------------------------------
export const LOAD_MY_ACCOUNTS = 'LOAD_MY_ACCOUNTS'


// ------------------------------------
// Actions
// ------------------------------------
/*
export function increment (value = 1) {
  return {
    type    : COUNTER_INCREMENT,
    payload : value
  }
}
*/

/*  This is a thunk, meaning it is a function that immediately
    returns a function for lazy evaluation. It is incredibly useful for
    creating async actions, especially when combined with redux-thunk! */

export const doLoadMyAccounts = () => {
  return (dispatch, getState) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        dispatch({
          type    : LOAD_MY_ACCOUNTS
        })
        resolve()
      }, 200)
    })
  }
}


export const actions = {
  doLoadMyAccounts
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [LOAD_MY_ACCOUNTS]    : (state, action) => {
    console.log("Returning stubbed account list");
    return {
      accountList: [{
          accountId: "28393298",
          name: "Root",
          description: "Your root account, can't change it"
        }, {
          accountId: "65664252",
          name: "Pippo",
          description: "My Custom"
      }]
    };
  }
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  accountList: [{
      accountId: "28393298",
      name: "Root",
      description: "Your root account, can't change it"
    }, {
      accountId: "65664252",
      name: "Pippo",
      description: "My Custom"
  }]
};
export default function accountListReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]
  return handler ? handler(state, action) : state
}
