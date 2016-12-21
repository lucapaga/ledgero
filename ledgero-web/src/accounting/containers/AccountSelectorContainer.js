'use strict'

// base
import { connect } from 'react-redux'

// actions
import { toggleTodo } from '../actions'

// (presentational) components to "connect to" REDUX
import AccountSelectorComponent from '../components/AccountSelectorComponent'


const mapStateToProps = (state, ownProps) => ({
  //todos: getVisibleTodos(state.todos, state.visibilityFilter)
  //active: ownProps.filter === state.visibilityFilter
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  //onTodoClick: toggleTodo
  onClick: (accountId) => {
    dispatch(accountSelected(accountId));
  }
})

// the 'object' that makes the 'binding' of the presentational component
// with REDUX
const AccountSelectorComponentBinding = connect(
  mapStateToProps,
  mapDispatchToProps
)(AccountSelectorComponent);

/*
  <select>
    <option name="">CIAO</option>
    <option name="" selected="selected">MIAO</option>
    <option name="">MAO</option>
  </select>
)
*/
export default AccountSelectorComponentBinding
