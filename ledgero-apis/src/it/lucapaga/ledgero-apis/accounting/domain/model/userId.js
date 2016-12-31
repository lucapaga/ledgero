'use strict';

//const Signum = require('./signum');

// Declare internals
const internals = {};

/*
{
  value: 0,
  signum: Signum.MINUS,
  currency: Currency.EURO
})
*/

exports = module.exports = internals.UserId = function (userId) {
  // member variables
  this._userId = userId;
};
