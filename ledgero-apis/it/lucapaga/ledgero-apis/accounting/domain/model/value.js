'use strict';

const Signum = require('./signum');

// Declare internals
const internals = {};


exports = module.exports = internals.Value = function (
  value, signum, currency
) {
  // member variables
  this._value = value;
  this._signum = signum;
  this._currency = currency;

  this.value = function () {
    return this._value;
  };

  this.sum = function (valueToAdd) {
    // check currency match.
    var value = this._value;
    console.log("Value is: $s", JSON.stringify(value));
    if(valueToAdd._signum == Signum.MINUS) { value = value - valueToAdd.value(); };
    if(valueToAdd._signum == Signum.PLUS) { value = value + valueToAdd.value(); };
    console.log("Value is: $s", JSON.stringify(value));
    return new internals.Value(value, this._signum, this._currency);
  };

  // TODO: refactor to some view-component
  this.toHtml = function() {
    var retVal = "";
    if(this._signum == Signum.MINUS) { retVal = retVal + "-"; }
    return retVal + this._value + " " + this._currency;
  };
};
