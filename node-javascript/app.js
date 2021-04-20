var http = require('http');
var module1 = require('./module1');
var module2 = require('./module2');


function onRequest(request, response) {
    response.writeHead(200, {'Content-Type' : 'text/plain'});
    response.write(module2.string);
    module2.myFunction();
    response.end();
};
module1.myFunction();
http.createServer(onRequest).listen(8000);