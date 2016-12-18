'use strict';

const Signum = require('./signum');

// Declare internals
const internals = {};

/*
{
  value: 0,
  signum: Signum.MINUS,
  currency: Currency.EURO
})
*/

exports = module.exports = internals.Value = function (
  value, signum, currency
) {
  // member variables
  this._value = value;
  this._signum = signum;
  this._currency = currency;

  this.sum = function (valueToAdd) {
    // check currency match.
    var value = this._value;
    if(valueToAdd._signum == Signum.MINUS) { value = value - valueToAdd._value};
    if(valueToAdd._signum == Signum.PLUS) { value = value + valueToAdd._value};
    return new Value(value, this._signum, this._currency);
  };
};
