var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.send('Running at root level');
});

app.get('/customer/:id', function (req, res) {
    res.send('Customer id : '+ req.params['id']);
});

app.get('/employee/:name', function (req, res) {
    res.send('Employee name : '+ req.params.name);
});

app.get('/manager', function (req, res) {
    res.send('manager name :  '+ req.query.name);               //query --- ?name=sid
});

app.listen(3000);