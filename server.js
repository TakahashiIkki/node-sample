const http = require('http');
const filSystem = require('fs');

const server = http.createServer();
let message = '';

server.on('request', function(request, response) {
    switch (request.url) {
        case '/about':
            message = 'Welcome About Page.';
            response.writeHead(200, {'Content-Type': 'text/plain'});
            response.write(message);
            response.end();
            break;
        case '/company':
            message = 'Welcome Company Page.';
            response.writeHead(200, {'Content-Type': 'text/plain'});
            response.write(message);
            response.end();
            break;
        case '/recruit':
            message = 'Welcome Recruit Page';
            response.writeHead(200, {'Content-Type': 'text/plain'});
            response.write(message);
            response.end();
            break;
        case '/service':
            filSystem.readFile( __dirname + '/service.html', 'utf-8', function(error, data) {
                // エラー発生時
                if (error) {
                    response.writeHead(404, {'Content-Type' : 'text/plain'});
                    response.write('page not found22');
                    return response.end();
                }
                response.writeHead(200, {'Content-Type': 'text/html'});
                response.write(data);
                response.end();
            });
            break;
        default:
            message = 'Page Not Found';
            response.writeHead(200, {'Content-Type': 'text/plain'});
            response.write(message);
            response.end();
            break;
    }
});

server.listen(3000);
