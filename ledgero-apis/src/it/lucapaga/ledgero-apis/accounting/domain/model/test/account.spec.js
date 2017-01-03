'use strict'

const Account = require('../account');
const Value = require('../../model/value');
const Signum = require('../../model/signum');
const Currency = require('../../model/currency');
const Movement = require('../../model/movement');

const MovementRepositoryStub = require('../../repositories/test/movementRepositoryStub');

describe('it.lucapaga.ledgero-apis.domain.model.Account', function () {
  /*
  beforeEach(inject(function(_$controller_){
    $controller = _$controller_;
  }));
  */

		it('[001] Costruction', function () {
      var account = new Account("accountId","accountName","ownerID");
			expect(account).not.toBe(null);
      expect(account._accountId).toBe("accountId");
      expect(account._name).toBe("accountName");
      expect(account._owner._userId).toBe("ownerID");
		});

    it('[002] Actual Balance Calculator', function (done) {
      var account = new Account("accountId","accountName","ownerID");

      var mrepo = new MovementRepositoryStub([
          new Movement(new Date(), new Date(), new Value(12, Signum.PLUS, Currency.EURO)),
          new Movement(new Date(), new Date(), new Value(11, Signum.PLUS, Currency.EURO)),
          new Movement(new Date(), new Date(), new Value(18, Signum.MINUS, Currency.EURO)),
          new Movement(new Date(), new Date(), new Value(1, Signum.PLUS, Currency.EURO))
        ]);

      var balance = account.actualBalance(mrepo);
      console.log("Ready to go");
      balance.then((result) => {
        expect(result).not.toBe(null);
        expect(result.value).not.toBe(null);
        expect(result.value.value()).not.toBe(null);
        expect(result.value.value()).toBe(6);
        done();
      }).catch((err) => {
        // ics
        expect(1).toBe(2);
        done();
      });
		});

});
