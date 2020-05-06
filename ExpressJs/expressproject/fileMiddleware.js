var connect = require('connect');                   // express runs over node
var servestatic = require('serve-static');

var server=connect()                                // connect - middleware
    .use(servestatic(__dirname+'/public'))
    .use(function onRequest(request,response){
        response.end('Hello from connect');
    })
    .listen(3000);