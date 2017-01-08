// ------------------------------------
// Constants
// ------------------------------------
export const LOAD_AT_INIT = 'LOAD_AT_INIT'

const stubbedState = {
  accountsList: [{
    accountId: "28393298"
  }, {
    accountId: "65664252"
  }]
};
const initialState = stubbedState;


// ------------------------------------
// Actions
// ------------------------------------
/*
export function increment (value = 1) {
  return {
    type    : LOAD_AT_INIT,
    payload : value
  }
}
*/

/*  This is a thunk, meaning it is a function that immediately
    returns a function for lazy evaluation. It is incredibly useful for
    creating async actions, especially when combined with redux-thunk! */

export const loadAccounts = () => {
  return (dispatch, getState) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        dispatch({
          type    : LOAD_AT_INIT
        })
        resolve()
      }, 200)
    })
  }
}


export const actions = {
  loadAccounts
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [LOAD_AT_INIT]    : (state, action) => {
      return stubbedState;
    }
}

// ------------------------------------
// Reducer
// ------------------------------------
export default function accountsReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type];
  return handler ? handler(state, action) : state;
}
