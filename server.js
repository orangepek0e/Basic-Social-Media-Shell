var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

var app = express();
var authController = require('./server/controllers/authController');


mongoose.connect('mongodb://localhost:27017/home-snippets');

app.use(bodyParser.json());

app.use('/app', express.static(__dirname + "/app"));

app.get('/', function(req, res){
    res.sendfile('index.html');
});

//Authentication
app.post('/api/user/signup', authController.signup);
app.post('/api/user/login', authController.login);

app.listen('3000', function(){
   console.log("The magic happens on port 3000");
});