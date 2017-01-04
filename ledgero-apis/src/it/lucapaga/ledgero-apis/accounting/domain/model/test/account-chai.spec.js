'use strict'

const Account = require('../account');
const Value = require('../../model/value');
const Signum = require('../../model/signum');
const Currency = require('../../model/currency');
const Movement = require('../../model/movement');

const MovementRepositoryStub = require('../../repositories/test/movementRepositoryStub');

// Chai - both 4 jasmine & mocha but _required_ for Mocha
const expect = require('chai').expect;

describe('it.lucapaga.ledgero-apis.domain.model.Account', function () {
  /*
  beforeEach(inject(function(_$controller_){
    $controller = _$controller_;
  }));
  */

		it('[101] Costruction / CHAI', function () {
      var account = new Account("accountId","accountName","ownerID");
			expect(account).not.to.be.a('null');
      expect(account._accountId).to.equal("accountId");
      expect(account._name).to.equal("accountName");
      expect(account._owner._userId).to.equal("ownerID");
		});

    it('[102] Actual Balance Calculator / CHAI', function (done) {
      var account = new Account("accountId","accountName","ownerID");

      var mrepo = new MovementRepositoryStub([
          new Movement(new Date(), new Date(), new Value(12, Signum.PLUS, Currency.EURO)),
          new Movement(new Date(), new Date(), new Value(11, Signum.PLUS, Currency.EURO)),
          new Movement(new Date(), new Date(), new Value(18, Signum.MINUS, Currency.EURO)),
          new Movement(new Date(), new Date(), new Value(1, Signum.PLUS, Currency.EURO))
        ]);

      var balance = account.actualBalance(mrepo);
      balance.then((result) => {
        expect(result).not.to.be.a(null);
        expect(result.value).not.to.be.a(null);
        expect(result.value.value()).not.to.be.a(null);
        expect(result.value.value()).to.equal(6);
        done();
      }).catch((err) => {
        // ics
        //expect(1).to.equal(2);
        done.fail("FAILED HERE -> " + JSON.stringify(err));
      });
		});

});
