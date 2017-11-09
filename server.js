var http = require('http');
var express = require('express');
var app = express();

app.get('/', function(req, res) {
    res.send('Hello there')
})

var server = http.createServer(app);
server.listen(3000);

