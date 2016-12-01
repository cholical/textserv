var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var http = require('http');
var _ = require('lodash');
var schedule = require('node-schedule');
var fs = require('fs');
var twilioConfig = JSON.parse(fs.readFileSync('./config/twilioConfig.json', 'utf8'));
var mysqlConfig = JSON.parse(fs.readFileSync('./config/mysqlConfig.json', 'utf8'));
var twilio = require('twilio')(twilioConfig.accountSid, twilioConfig.authToken);

var app = express();
var port = 8080;
var sessions = [];

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({'extended': 'true'}));
app.use(bodyParser.json());

app.post('/api/login', function (req, res) {
	
});

app.post('/api/getDashboard', function (req, res) {
	
});

app.post('/api/createList', function (req, res) {
	
});

app.post('/api/deleteList', function (req, res) {
	
});

app.post('/api/openList', function (req, res) {
	
});

app.post('/api/addPerson', function (req, res) {
	
});

app.post('/api/removePerson', function (req, res) {
	
});

app.post('/api/sendMessage', function (req, res) {
	
});

app.post('/api/getMessages', function (req, res) {
	
});

app.post('/api/logout', function (req, res) {
	
});

app.get('*', function(req, res) {
	res.sendFile(path.join(__dirname, 'public/index.html'));
});

app.listen(port, function () {
	console.log("Server running on port " + port);
});