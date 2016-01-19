var Users = require('../datasets/users');

module.exports.signup = function (req, res){
    var user = new Users(req.body);
    user.save();

    res.json(req.body);
}

module.exports.login = function(req,res){
    Users.find(req.body, function(err, results){
        if(err){
            console.log("Error Out");
        }

        if(results && results.length === 1){
            res.json(req.body.email);
        }
    })
}