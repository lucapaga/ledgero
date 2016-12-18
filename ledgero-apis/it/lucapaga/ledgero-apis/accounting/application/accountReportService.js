'use strict';

const MovementRepository = require('../domain/repositories/movementRepository');
const AccountRepository = require('../domain/repositories/accountRepository');
const Account = require('../domain/model/account');

//const MovementRepository = require('../repositories/movementRepository')

// Declare internals
const internals = {};

exports = module.exports = internals.AccountReportService = function () {
  // member variables
  //this._accountId = accountId;

  /*
  this.instance = function() {
    return new internals.AccountReportService();
  };
  */

  this.calculateActualBalance = function(accountId) {
    var accountRepo = new AccountRepository();
    var movementRepo = new MovementRepository();
    return accountRepo.findAccountById(accountId)
      .then((account) => {
        return account.actualBalance(movementRepo);
      }).then((calculatedBalance) => {
        return new Promise((resolve, reject) => {
          resolve(calculatedBalance);
        });
      })
      .catch((error) => {
        return new Promise((resolve, reject) => {
          reject(error);
        });
      });
  };
};
