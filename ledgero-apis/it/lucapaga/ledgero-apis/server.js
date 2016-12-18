'use strict';

const Hapi = require('hapi');

const MovementRepository = require('./accounting/domain/repositories/movementRepository');
const Account = require('./accounting/domain/model/account');


// Create a server with a host and port
const server = new Hapi.Server();
server.connection({
    host: 'localhost',
    port: 8000
});

// Add the route
server.route({
    method: 'GET',
    path:'/hello',
    handler: function (request, reply) {
      var account = new Account("accountId", "accountName", "ownerUserId");
      account
        .actualBalance(new MovementRepository())
        .then((calculatedBalance) => {
          return reply('Balance is: ' + calculatedBalance.value +
                      ' on ' + calculatedBalance.numberOfMovements + ' movements');
        })
        .catch((error) => {
          console.error('An Error occurred! ', error);
          return reply('Error man...: ' + JSON.stringify(error));
        });
        /*
        calculatedBalance = {
          numberOfMovements: 0;
          value: new Value(0, Signum.MINUS, Currency.EURO);
        };
        */
    }
});

// Start the server
server.start((err) => {
    if (err) {
        throw err;
    }
    console.log('Server running at:', server.info.uri);
});
