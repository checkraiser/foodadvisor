var Hapi = require('hapi');

var server = new Hapi.Server();

server.connection({
	host: 'localhost',
	port: 8000
})

server.register({
	register: require('./plugins/myPlugin'),
	options: {
			message: 'hello'
		}
	}, function (err) {
	if (err) {
		throw(err);
	}
	if (!module.parent) {
		server.start(function() {
        console.log("Server started", server.info.uri);
    });
}); 