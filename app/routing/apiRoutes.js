var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var friends = require("../data/friends");

module.exports = function(app){
    // A GET route with the url /api/friends. This will be used to display a JSON of all possible friends.
    app.get("/api/friends", function (req, res) {
        res.json(friends);
    });
    
    // A POST routes /api/friends. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.
    app.post("/api/friends", function(req, res) {
        var newFriend = req.body;
        newFriend.routeName = newFriend.name.replace(/\s+/g, "").toLowerCase();
        for(var i = 0; i < newFriend.scores.length; i++){
            newFriend.scores[i] = parseInt(newFriend.scores[i]);
        }
        // newFriend.scores = Number(newFriend.scores;
        console.log(newFriend);
        friends.push(newFriend);    
        res.json(newFriend);
      });
}