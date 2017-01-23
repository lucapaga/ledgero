import fetch from 'isomorphic-fetch'

import { LOAD_MY_ACCOUNTS, LOADING_MY_ACCOUNTS } from './actionTypes'
import { createLoadingAction, createMockedAccountListAction } from './actionGenerators'


export const doLoadMyAccounts = () => {
  // this is thunk Middleware!
  return (dispatch, getState) => {
    dispatch(createLoadingAction());

    var restURL = "";

    // with this Promise we simulate an aynch REST call!
    /*
    return fetch(restURL)
      .then(response => response.json())
      .then(json =>
        dispatch(receivePosts(subreddit, json))
      );
    */
  }
}

export const doLoadMocked = () => {
  // this is thunk Middleware!
  return (dispatch, getState) => {
    console.log("Dispatching event '",LOADING_MY_ACCOUNTS,"'");
    dispatch(createLoadingAction());

    // with this Promise we simulate an aynch REST call!
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log("Going to dispatch event '",LOAD_MY_ACCOUNTS,"'");
        // this should be included in a then() operation of the REST call
        dispatch(createMockedAccountListAction());
        // a REST call would return its Promise and will resolve once response is given
        resolve();
        //reject();
      }, 2000);
    })
  }
}

export default doLoadMyAccounts
