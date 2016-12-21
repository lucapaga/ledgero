'use strict';

const Hapi = require('hapi');

//const MovementRepository = require('./accounting/domain/repositories/movementRepository');
//const Account = require('./accounting/domain/model/account');

const AccountReportService = require('./accounting/application/accountReportService');
const MovementService = require('./accounting/application/movementService');

// Create a server with a host and port
const server = new Hapi.Server();
server.connection({
    host: 'localhost',
    port: 8000
});

server.route({
    method: 'GET',
    path:'/account/{accountId}/balance',
    handler: function (request, reply) {
      var ars = new AccountReportService();
      ars.calculateActualBalance("accountId")
        .then((calculatedBalance) => {
          return reply('Balance is: ' + calculatedBalance.value.toHtml() +
                      ' on ' + calculatedBalance.numberOfMovements + ' movements');
        })
        .catch((error) => {
          console.error('An Error occurred! ', error);
          return reply('Error man...: ' + JSON.stringify(error));
        });
    }
});

server.route({
    method: 'GET',
    path: '/account/{accountId}/movements',
    handler: function (request, reply) {
      var ms = new MovementService();
      ms.loadMovementsOfAccount(request.params.accountId)
        .then((movListObject) => {
          return reply(JSON.stringify(movListObject));
        })
        .catch((error) => {
          return reply('Error man...: ' + JSON.stringify(error));
        });
    }
});

// Start the server
server.start((err) => {
    if (err) {
        throw err;
    }
    console.log('Server running at:', server.info.uri);
});
