import { injectReducer } from '../../store/reducers'

export default (store) => ({
  path : 'accountList',
  /*  Async getComponent is only invoked when route matches   */
  getComponent (nextState, cb) {
    /*  Webpack - use 'require.ensure' to create a split point
        and embed an async module loader (jsonp) when bundling   */
    require.ensure([], (require) => {
      /*  Webpack - use require callback to define
          dependencies for bundling   */
      const AccountListContainer = require('./containers/AccountListContainer').default
      //const reducer = require('./modules/accountList').default
      const reducer = require('./reducers').default

      /*  Add the reducer to the store on key 'counter'  */
      //console.log("Configuring reducer: ", reducer);
      injectReducer(store, { key: 'accountListReduced', reducer });
      //console.log("DONE!");

      /*  Return getComponent   */
      cb(null, AccountListContainer);

    /* Webpack named bundle   */
    }, 'accountListWPB');
  }
})
