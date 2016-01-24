var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var multipart = require('connect-multiparty');
var multipartMiddleware = multipart();

var app = express();
var authController = require('./server/controllers/authController');
var profileController = require('./server/controllers/profileController');


mongoose.connect('mongodb://localhost:27017/home-snippets');

app.use(bodyParser.json());
app.use(multipartMiddleware);
app.use('/app', express.static(__dirname + "/app"));
app.use('/node_modules', express.static(__dirname + "/node_modules"));


app.get('/', function(req, res){
    res.sendfile('index.html');
});

//Authentication
app.post('/api/user/signup', authController.signup);
app.post('/api/user/login', authController.login);

//Profile
app.post('/api/profile/editPhoto', multipartMiddleware, profileController.updatePhoto);
app.post('/api/profile/updateUsername', profileController.updateUsername);
app.post('/api/profile/updateBio', profileController.updateBio);

//Snippets
app.post('/api/snippets/post', SnippetController.postSnippet);

app.listen('3000', function(){
   console.log("The magic happens on port 3000");
});