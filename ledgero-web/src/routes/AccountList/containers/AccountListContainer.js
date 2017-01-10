import { connect } from 'react-redux'
import { doLoadMyAccounts } from '../actions'

/*  This is a container component. Notice it does not contain any JSX,
    nor does it import React. This component is **only** responsible for
    wiring in the actions and state necessary to render a presentational
    component - in this case, the counter:   */

import AccountListComponent from '../components/AccountListComponent'

// 1-1 mapping of actions' methods
const mapDispatchToProps = {
  doLoadMyAccounts
}

/*   state.accountListReduced: that 'accountListReduced' depends on
      injectReducer(store, { key: 'accountListReduced', reducer }); key you use
*/
const mapStateToProps = (state) => {
  console.log("Mapping state to props, state is: ", state);
  let stateToReturn = {
    accountList:  state.accountListReduced.accountList,
    nrOfAccounts: state.accountListReduced.nrOfResults,
    isLoadingAccounts: state.accountListReduced.isLoadingAccounts
  };
  console.log("Returning mapping: ", stateToReturn);
  return stateToReturn;
}

/*  Note: mapStateToProps is where you should use `reselect` to create selectors, ie:

    import { createSelector } from 'reselect'
    const counter = (state) => state.counter
    const tripleCount = createSelector(counter, (count) => count * 3)
    const mapStateToProps = (state) => ({
      counter: tripleCount(state)
    })

    Selectors can compute derived data, allowing Redux to store the minimal possible state.
    Selectors are efficient. A selector is not recomputed unless one of its arguments change.
    Selectors are composable. They can be used as input to other selectors.
    https://github.com/reactjs/reselect    */

export default connect(mapStateToProps, mapDispatchToProps)(AccountListComponent)
