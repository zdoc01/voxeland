var Hapi = require('hapi');
var Path = require('path');
var server = new Hapi.Server();
server.connection({ port: process.env.PORT || 9001 });	// port dynamically assigned by Heroku

server.register(require('inert'), function (err) {

	if (err) throw err;

	server.route({
		method: 'GET',
		path: '/{path*}',
		handler: {
			directory: {
				index: true,	// requests to `/` will attempt to load index.html
				path: Path.join(__dirname, 'public') 
			}
		}
	});

	server.start(function (err) {
		if (err) throw err;
	    console.log('Hapi server running at:', server.info.uri);
	});

});