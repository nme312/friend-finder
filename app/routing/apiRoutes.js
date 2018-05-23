var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// A GET route with the url /api/friends. This will be used to display a JSON of all possible friends.
app.get("/api/friends", function (req, res) {
    res.sendFile(path.join(__dirname, "view.html"));
});

// A POST routes /api/friends. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.
app.post("/api/friends", function (req, res) {
    res.sendFile(path.join(__dirname, "view.html"));
});
