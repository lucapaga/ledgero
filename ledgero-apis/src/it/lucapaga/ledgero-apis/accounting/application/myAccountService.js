'use strict';

/*
import { AccountRepository } from '../domain/repositories/accountRepository'
import { MyAccountsAdapter } from './adapters/myAccountsAdapter'
*/

/**/
const AccountRepository = require('../domain/repositories/accountRepository');
const MyAccountsAdapter = require('./adapters/myAccountsAdapter');
/**/

const internals = {};

exports = module.exports = internals.MyAccountsService = function () {

  this.loadAccounts = function() {
    var accountRepo = new AccountRepository();
    var myAccountsAdapter = new MyAccountsAdapter();

    return accountRepo.findAccountsOwnedByUser('CDCD787C8D7C87D8')
      .then((accountListDescriptor) => {
        return new Promise((resolve, reject) => {
          var accountsVO = [];
          accountListDescriptor.accountList.map((entry) => {
            accountsVO.push(myAccountsAdapter.translateFromAccount(entry));
          });
          resolve({
            accountList:  accountsVO,
            nrOfAccounts: accountListDescriptor.nrOfAccounts
          });
        });
      })
      .catch((error) => {
        return new Promise((resolve, reject) => {
          reject(error);
        });
      });
  };
};
