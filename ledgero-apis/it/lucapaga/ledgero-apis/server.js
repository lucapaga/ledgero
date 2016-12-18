'use strict';

const Hapi = require('hapi');

//const MovementRepository = require('./accounting/domain/repositories/movementRepository');
//const Account = require('./accounting/domain/model/account');

const AccountReportService = require('./accounting/application/accountReportService');

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

// Start the server
server.start((err) => {
    if (err) {
        throw err;
    }
    console.log('Server running at:', server.info.uri);
});
