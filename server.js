const http      = require('http');
const ejs       = require('ejs');
const filSystem = require('fs');
const server    = http.createServer();

let message  = '';
// テンプレートファイルを扱う.
let template = filSystem.readFileSync(__dirname + '/sample.ejs', 'utf-8');

let randomNumber = 0;

server.on('request', function(request, response) {
    randomNumber = Math.round(Math.random() * 100);

    let data = ejs.render(template, {
        title: 'Hello Hello',
        content: "<h2>アクセスありがとうございます！</h2>",
        randomNumber: randomNumber,
    });

    response.writeHead(200, {'Content-Type' : 'text/html'});
    response.write(data);
    response.end();
});

server.listen(3000);
