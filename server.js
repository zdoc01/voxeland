var Hapi = require('hapi');
var Path = require('path');
var server = new Hapi.Server(process.env.PORT || 9001);		// port dynamically assigned by Heroku

server.route({
	method: 'GET',
	path: '/{path*}',
	handler: {
		directory: { path: Path.join(__dirname, 'public'), listing: false, index: true }
	}
});

server.start(function () {
    console.log('Hapi server running at:', server.info.uri);
});