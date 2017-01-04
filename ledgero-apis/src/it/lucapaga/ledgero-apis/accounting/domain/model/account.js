'use strict';

// const Schema = require('./schema');
const UserId = require('./userId');
const Value = require('./value');
const Signum = require('./signum');
const Currency = require('./currency');

//const MovementRepository = require('../repositories/movementRepository')

// Declare internals
const internals = {};

exports = module.exports = internals.Account = function (
    accountId, accountName, ownerUserId
) {
  // member variables
  this._accountId = accountId;
  this._name = accountName;
  this._owner = new UserId(ownerUserId);

  this.actualBalance = function(movementRepository){
    var self = this;
    return new Promise((resolve, reject) => {
      movementRepository
        .getAllMovementsForAccount(self._accountId)
          .then((searchResult) => {
            var calculatedBalance = self._calculateActualBalance(searchResult.movementList);
            //resolve(calculatedBalance);
            reject({ceccia: "Peccia"});
          })
          .catch((error) => {
            console.error("Azz: ", error);
            reject({
              code: "E839139",
              text: "Unable to Load Movements from Repository: " + JSON.stringify(error)
            });
          });
    });
  };

  this._calculateActualBalance = function (movementList) {
    var calculatedBalance = {
      numberOfMovements: 0,
      value: new Value(0, Signum.PLUS, Currency.EURO)
    };
    movementList.forEach((item, index, list) => {
      calculatedBalance.numberOfMovements++;
      console.log("Item's structure: %s", JSON.stringify(item));
      calculatedBalance.value = calculatedBalance.value.sum(item.value());
    });
    return calculatedBalance;
  };
};
