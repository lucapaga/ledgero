import fetch from 'isomorphic-fetch'

import { LOAD_MY_ACCOUNTS, LOADING_MY_ACCOUNTS } from './actionTypes'
import { createLoadingAction, createMockedAccountListAction, publishRealAccountListAction } from './actionGenerators'


export const doLoadMyAccounts = () => {
  // this is thunk Middleware!
  return (dispatch, getState) => {
    dispatch(createLoadingAction());

    var restURL = "/rest/myaccounts";

    // with this Promise we simulate an aynch REST call!
    return fetch(restURL)
      .then(response => {
        console.log("Here I received: ", response);
        return response.json();
      }).then(json => {
        console.log("Then JSON is: ", json);
        return dispatch(publishRealAccountListAction(json));
      });
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
