/* ====================================
    Action TYPES
==================================== */
export const AccountListActionTypes = {
  REFRESH_ACCOUNT_LIST: 'REFRESH_ACCOUNT_LIST'
}

/* ====================================
    Action dispatcher (events / commands)
==================================== */
export const refreshAccountList = () => {
  return (dispatch, getState) => {
//    return new Promise((resolve, reject) => {
//      setTimeout(() => {
        console.log("Dispatching action: '" + AccountListActionTypes.REFRESH_ACCOUNT_LIST + "'");
        dispatch({
          type    : AccountListActionTypes.REFRESH_ACCOUNT_LIST /*,
          payload : getState().counter*/
        });
        console.log("Resolving...");
//        resolve();
        console.log("Cià!");
//      }, 200);
//    });
  }
}

/*
export const actions = {
  refreshAccountList
}
*/
//export default refreshAccountList
