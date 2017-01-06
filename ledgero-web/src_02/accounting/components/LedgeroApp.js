'use strict'

import React from 'react'

/*
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'
*/

import AccountSelector from '../containers/AccountSelector'
import MovementList from '../containers/MovementList'


/*
<div>
  <AddTodo />
  <VisibleTodoList />
  <Footer />
</div>
*/
const LedgeroApp = () => (
  <div>
    <H1>Ledgero Application</H1>
    <H2>Lista Movimenti</H2>
    <AccountSelector />
    <MovementList />
  </div>
)

export default LedgeroApp
