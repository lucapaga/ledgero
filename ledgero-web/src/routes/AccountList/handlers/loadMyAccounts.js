

export const doLoadMyAccountsHandler = (state, action) => {
  let retVal = {
    accountList: [{
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
    nrOfResults: 3
  };
  console.log("Returning stubbed account list ", retVal);
  return retVal;
};

export default doLoadMyAccountsHandler
