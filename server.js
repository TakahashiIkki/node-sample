const http = require('http');
const server = http.createServer();
let message = '';

server.on('request', function(request, response) {
    response.writeHead(200, {'Content-Type': 'text/plain'});

    switch (request.url) {
        case '/about':
            message = 'Welcome About Page.';
            break;
        case '/company':
            message = 'Welcome Company Page.';
            break;
        case '/recruit':
            message = 'Welcome Recruit Page';
            break;
        default:
            message = 'Page Not Found';
            break;
    }
    response.write(message);
    response.end();
});

server.listen(3000);