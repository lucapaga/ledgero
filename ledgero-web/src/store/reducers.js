import { combineReducers } from 'redux'
import locationReducer from './location'

export const makeRootReducer = (asyncReducers) => {
  return combineReducers({
    location: locationReducer,
    ...asyncReducers
  })
}

export const injectReducer = (store, { key, reducer }) => {
  console.log("reducers :: injectReducer :: at-start Store: ", store);
  if (Object.hasOwnProperty.call(store.asyncReducers, key)) {
    console.log("reducers :: injectReducer :: no-action Store: ", store);
    return
  }

  store.asyncReducers[key] = reducer
  store.replaceReducer(makeRootReducer(store.asyncReducers))
  console.log("reducers :: injectReducer :: at-end Store: ", store);
}

export default makeRootReducer
