var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

var app = express();


mongoose.connect('mongodb://localhost:27017/home-snippets');

app.use('/app', express.static(__dirname + "/app"));

app.get('/', function(req, res){
    res.sendfile('index.html');
});

app.listen('3000', function(){
   console.log("The magic happens on port 3000");
});