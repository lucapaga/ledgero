'use strict'

const Account = require('../account');

describe('it.lucapaga.ledgero-apis.domain.model.Account', function () {

  //beforeEach(module('calculatorApp'));

  //var $controller;

  /*
  beforeEach(inject(function(_$controller_){
    $controller = _$controller_;
  }));
  */

  describe('Creation', function () {
		it('My name is "Luca"', function () {
      var account = new Account("accountId","accountName","ownerID");
			expect(account).not.toBe(null);
      expect(account._owner._userId).toBe("ownerID");
		});
	});

});
