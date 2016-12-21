'use strict';

const MovementRepository = require('../domain/repositories/movementRepository');

const internals = {};

exports = module.exports = internals.MovementService = function () {

  this.loadMovementsOfAccount = function(accountId) {
    var movementRepo = new MovementRepository();
    if(!accountId || accountId == "") {
      return new Promise((resolve, reject) => {
        reject({
          errorCode:"74982",
          key:"nullAccountId",
          localizedMessage:"Account ID not defined!"
        });
      });
    }
    return movementRepo.getAllMovementsForAccount(accountId);
  };
};
