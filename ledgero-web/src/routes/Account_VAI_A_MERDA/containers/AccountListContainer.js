import { connect } from 'react-redux'

// Presentation Components
import AccountsComponent from '../components/AccountList'

// Actions ('command' generators)
import { refreshAccountList } from '../actions'
import { AccountListActionTypes } from '../actions'

// binding 'actions/events'
const mapDispatchToProps = {
  /*
  increment : () => increment(1),
  */
  refreshAccountList
};

// binding 'values'
const mapStateToProps = (state, ownProps) => {
  return {
    accountList: state.accountList
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AccountsComponent);
