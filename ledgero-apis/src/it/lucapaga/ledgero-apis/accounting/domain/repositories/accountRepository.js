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

  this.findAccountsOwnedByUser = function (userId) {
    return new Promise((resolve, reject) => {
      resolve({
        nrOfAccounts: 4,
        accountList: [
          new Account('CD7DCDCDCD8SC8Y', "IT'S MY FIRST",       userId),
          new Account('CD784R445RFSC8Y', "THEN MY SECOND",      userId),
          new Account('CECDE487SY8SC8Y', "THIRD, QUITE ENDED",  userId),
          new Account('4DSRDFER3Y8SC8Y', "LAST BY NOT LEAST",   userId)
        ]
      });
    });
  };
};
