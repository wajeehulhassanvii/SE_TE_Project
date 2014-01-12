
/*
 * GET users listing.
 */

exports.list = function(req, res){
    var mongoose = require('mongoose');
    var Schema      = mongoose.Schema;
    var connection = mongoose.connect("mongodb://localhost/SELogin", function(err){
        if(err){
            console.log("Err");
            res.send("a");
        } else {
            console.log("Connected To DB");
            res.send("a");
        }
    });

};