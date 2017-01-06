'use strict'

import { combineReducers } from 'redux'

import accountBalanceReducer from './accountBalanceReducer'
//import visibilityFilter from './visibilityFilter'

const combinedRecucers = combineReducers({
  accountBalanceReducer
//  ,
//  visibilityFilter
})

export default combinedRecucers
