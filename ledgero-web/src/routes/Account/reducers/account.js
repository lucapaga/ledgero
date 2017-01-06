/*
  ============================
  REDUCER(s)
  ============================
*/
const stubbedState = {
  accountsList: [{
    accountId: "28393298"
  }, {
    accountId: "65664252"
  }]
};
const initialState = stubbedState;

export default function counterReducer (state = { accountsList: [{ accountId: "28393298" }, { accountId: "65664252" }] }, action) {
  return state;
}
