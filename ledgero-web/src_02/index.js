'use strict'

import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import LedgeroApp from './accounting/components/LedgeroApp'
import reducer from './accounting/reducers'

const store = createStore(reducer);

render(
  <Provider store={store}>
    <LedgeroApp />
  </Provider>,
  document.getElementById('screenRender')
)
