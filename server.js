const http = require('http');
const server = http.createServer();

server.on('request', function(request, response) {
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.write('hello world');
    response.end();
});

server.listen(3000);