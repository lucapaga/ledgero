'use strict';

const Hapi = require('hapi');


// Create a server with a host and port
const server = new Hapi.Server();

// h2o2
server.register({
    register: require('h2o2')
}, function (err) {
    if (err) {
        console.log('Failed to load h2o2');
    }
    server.start(function (err) {
        console.log('Server started at: ' + server.info.uri);
    });
});

// da server
server.connection({
    host: 'localhost',
    port: 8888
});

/*
server.route({
  method: '*',
  path: '/rest/{path*}',
  handler: {
    proxy: {
      host: 'localhost',
      port: 8000,
      protocol: 'http',
      passThrough: true,
      redirects: 5
    }
  }
});
*/

server.route({
    method: '*',
    path: '/{path*}',
    handler: {
        proxy: {
            mapUri: function (request, callback) {
                console.log("Analizing path: '", request.path, "'");

                var checkMatch = request.path.match(/^\/rest\//);
                console.log("checkMatch is ", checkMatch);

                var proxedUri = ""
                if(checkMatch != null && checkMatch.index == 0) {
                  console.log("The we need to proxy B/E");
                  var trailingPath = request.path.replace(/^\/rest\//, "/");
                  console.log("Path becomes: ", trailingPath);
                  proxedUri = "http://localhost:8000" + trailingPath;
                } else {
                  console.log("Then we need to proxy F/E");
                  proxedUri = "http://localhost:3000" + request.path;
                }

                //var proxedUri = "http://localhost:8000" + request.path;
                console.log("Proxying: '", proxedUri, "'");
                callback(null, proxedUri);
            },
            onResponse: function (err, res, request, reply, settings, ttl) {
                //console.log('receiving the response from the upstream.');
                //Wreck.read(res, { json: true }, function (err, payload) {

                    //console.log('some payload manipulation if you want to.')
                    //reply(payload).headers = res.headers;
                //});
                reply(res);
            }
        }
    }
});
