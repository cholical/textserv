var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var http = require('http');
var _ = require('lodash');
var schedule = require('node-schedule');
var fs = require('fs');
var crypto = require('crypto');
var twilioConfig = JSON.parse(fs.readFileSync('./config/twilioConfig.json', 'utf8'));
var mysqlConfig = JSON.parse(fs.readFileSync('./config/mysqlConfig.json', 'utf8'));
var twilio = require('twilio')(twilioConfig.accountSid, twilioConfig.authToken);
var mysql = require('mysql');
var sql = mysql.createConnection(mysqlConfig);
sql.connect(function (err) {
	console.log("Database connection established.");
	if (err) {
		console.log(err);
	}
});
var tools = require('./repository/tools.js');
var home = require('./repository/home/home.js');
var dashboard = require('./repository/dashboard/dashboard.js');
var list = require('./repository/list/list.js');
var messages = require('./repository/messages/messages.js');

var app = express();
var port = 8080;
var sessions = [];

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({'extended': 'true'}));
app.use(bodyParser.json());

app.post('/api/login', function (req, res) {
	var username = req.body.username;
	var password = req.body.password;
	home.login(username, password, crypto, tools, sql, _, sessions, res);
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
	console.log("Server running on port " + port + ".");
});