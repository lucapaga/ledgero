import { LOAD_MY_ACCOUNTS, LOADING_MY_ACCOUNTS } from './actionTypes'

export const createLoadingAction = () => {
  console.log("Dispatching event '",LOADING_MY_ACCOUNTS,"' ...");
  return { type: LOADING_MY_ACCOUNTS };
}

export const createMockedAccountListAction = () => {
  return {
        type        : LOAD_MY_ACCOUNTS,
        accountList : [{
              accountId: "28393298",
              name: "Root",
              description: "Your root account. You can't change it"
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
      };
}


export const publishRealAccountListAction = (restResponse) => {
  return {
        type        : LOAD_MY_ACCOUNTS,
        accountList : restResponse.accountList,
        nrOfResults : restResponse.nrOfAccounts
      };
}
