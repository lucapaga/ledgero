'use strict';

// const Schema = require('./schema');
const Value = require('../model/value');
const Signum = require('../model/signum');
const Currency = require('../model/currency');

const Movement = require('../model/movement');

// Declare internals
const internals = {};

exports = module.exports = internals.MovementRepository = function () {
  // member variables

  /*
  this.instance = function() {
    return new internals.MovementRepository();
  };
  */

  this.getAllMovementsForAccount = function (accountId) {
    return new Promise((resolve, reject) => {
      resolve({
        movementList: [
          new Movement(new Date(), new Date(), new Value(12, Signum.PLUS, Currency.EURO)),
          new Movement(new Date(), new Date(), new Value(11, Signum.PLUS, Currency.EURO)),
          new Movement(new Date(), new Date(), new Value(18, Signum.MINUS, Currency.EURO))
        ]
      });
    });
  };
};
