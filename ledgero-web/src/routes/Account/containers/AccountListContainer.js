import { connect } from 'react-redux'

// Presentation Components
import AccountsComponent from '../components/AccountList'

// Actions ('command' generators)
//import { increment, doubleAsync } from '../modules/counter'

// binding 'actions/events'
const mapDispatchToProps = {
  /*
  increment : () => increment(1),
  doubleAsync
  */
}

// binding 'values'
const mapStateToProps = (state) => ({
  accountList: state.accountList
})

export default connect(mapStateToProps, mapDispatchToProps)(AccountsComponent)
