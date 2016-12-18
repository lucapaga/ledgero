'use strict';

// const Schema = require('./schema');

// Declare internals
const internals = {};

exports = module.exports = internals.Movement = function (
  operationDate, accountabilityDate,
  value
) {
  // member variables
  this._operationDate = operationDate;
  this._accountabilityDate = accountabilityDate;
  this._value = value;
};
