import { injectReducer } from '../../store/reducers'

export default (store) => ({
  path : 'accounts',
  /*  Async getComponent is only invoked when route matches   */
  getComponent (nextState, cb) {
    /*  Webpack - use 'require.ensure' to create a split point
        and embed an async module loader (jsonp) when bundling   */
    require.ensure([], (require) => {
      /*  Webpack - use require callback to define
          dependencies for bundling   */
      const accountListContainer = require('./containers/AccountListContainer').default
      const accountReducer = require('./reducers/account').default

      /*  Add the reducer to the store on key 'account'  */
      injectReducer(store, { key: 'accounts', accountReducer })

      /*  Return getComponent   */
      cb(null, accountListContainer)

    /* Webpack named bundle   */
    }, 'accounts')
  }
})
