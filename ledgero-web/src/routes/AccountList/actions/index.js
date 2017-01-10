
import { LOAD_MY_ACCOUNTS, LOADING_MY_ACCOUNTS } from './actionTypes'

export const doLoadMyAccounts = () => {
  // this is thunk Middleware!
  return (dispatch, getState) => {
    console.log("Dispatching event '",LOADING_MY_ACCOUNTS,"'");
    dispatch({ type: LOADING_MY_ACCOUNTS });

    // with this Promise we simulate an aynch REST call!
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log("Going to dispatch event '",LOAD_MY_ACCOUNTS,"'");
        // this should be included in a then() operation of the REST call
        dispatch({
          type        : LOAD_MY_ACCOUNTS,
          accountList : [{
                accountId: "28393298",
                name: "Root",
                description: "Your root account, can't change it"
              }, {
                accountId: "65664252",
                name: "Pippo",
                description: "My Custom"
              }, {
                accountId: "3787887328",
                name: "Pluto",
                description: "My Caztom"
            }],
          nrOfResults : 3
        });
        // a REST call would return its Promise and will resolve once response is given
        resolve();
        //reject();
      }, 2000);
    })
  }
}

export default doLoadMyAccounts
