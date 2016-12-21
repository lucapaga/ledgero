'use strict'

const accountBalanceReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {something: "CIAO"}
      ]
    case 'TOGGLE_TODO':
      return {something: "MIAO"};
      /*
      return state.map(t =>
        todo(t, action)
      )
      */
    default:
      return state
  }
}

export default accountBalanceReducer
