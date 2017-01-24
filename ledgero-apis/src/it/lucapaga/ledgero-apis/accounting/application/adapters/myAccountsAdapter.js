'use strict';

const internals = {};

exports = module.exports = internals.MyAccountsAdapter = function () {
  this.translateFromAccount = function(account) {
    return {
      accountId:    account._accountId,
      name:         account._name,
      description:  "NO MORE THAN '" + account._name + "'"
    };
  }
}
