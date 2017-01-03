'use strict';

// const Schema = require('./schema');
const Value = require('../../model/value');
const Signum = require('../../model/signum');
const Currency = require('../../model/currency');

const Movement = require('../../model/movement');

// Declare internals
const internals = {};

exports = module.exports = internals.MovementRepositoryStub = function (movementList) {

  var movs = null;

  if(!movementList || movementList == null) {
    movs = [
      new Movement(new Date(), new Date(), new Value(12, Signum.PLUS, Currency.EURO)),
      new Movement(new Date(), new Date(), new Value(11, Signum.PLUS, Currency.EURO)),
      new Movement(new Date(), new Date(), new Value(18, Signum.MINUS, Currency.EURO))
    ];
  } else {
    movs = movementList;
  }

  this.createEmptyStub = function() {
    this.movs = [];
    return this;
  }

  this.createInstanceWithSpecificMovements = function (movementList) {
    this.movs = movementList;
    return this;
  }

  this.getAllMovementsForAccount = function (accountId) {
    return new Promise((resolve, reject) => {
      resolve({
        movementList: movs
      });
    });
  };
};
