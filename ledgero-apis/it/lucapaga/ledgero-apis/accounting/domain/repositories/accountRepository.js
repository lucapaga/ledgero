'use strict';

// const Schema = require('./schema');
const Account = require('../model/account');

// Declare internals
const internals = {};

exports = module.exports = internals.AccountRepository = function () {
  // member variables

  /*
  this.instance = function() {
    return new internals.AccountRepository();
  };
  */

  this.findAccountById = function (accountId) {
    return new Promise((resolve, reject) => {
      resolve(new Account(accountId, "A NAME", "An OWNER"));
    });
  };
};
