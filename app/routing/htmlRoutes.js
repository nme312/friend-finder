var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

module.exports = function(app){
    // A default, catch-all route that leads to home.html which displays the home page.
    app.get("/", function (req, res) {
        res.sendFile(path.join(__dirname, "home.html"));
    });
    
    // A GET Route to /survey which should display the survey page.
    app.get("/survey", function (req, res) {
        res.sendFile(path.join(__dirname, "survey.html"));
    });   
}