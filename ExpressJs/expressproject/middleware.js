var connect=require('connect');
var util =require('util');

var intercertorFunction=function(request,response,next){
    console.log(util.format('Request for %s for method %s',request.url,request.method));
    next();
}

// var server=connect()
//     .use(intercertorFunction)
//     .use(function onRequest(request,response){
//         response.end('Hello from connect');
//     }).listen(3000);


    var server=connect()
    .use('/log',intercertorFunction)
    .use(function onRequest(request,response){
        response.end('Hello from connect');
    }).listen(3000);