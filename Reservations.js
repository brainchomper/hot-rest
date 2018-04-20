var http = require("http");
var fs = require("fs");
var mysql = require("mysql");
var bodyParser = require("body-parser");
var url = require("url");
var app = require("express");

var PORT = 3030;

var reservation = [];
var waitingList = [];

function handleRequestOne(req, res) {
	// puts together a url object we are using
	var urlParts = url.parse(req.url);
	// switch statement that changes baised on the url passed in
	switch (urlParts.pathname) {
		// if we are at localhost:3030/ then run display root
		case "/":
			displayRoot(urlParts, req, res);
			break;
		case "/makeres":
			displayReservations(urlParts, req, res);
			break;
		case "/viewres":
			displayResList(urlParts, req, res);
			break;
		default:
			break;
	}
}

function displayRoot(urlParts, req, res) {
	app.get("/", function(req, res) {
		return res.json(reservations);

	});
}


function displayReservations(urlParts, req, res) {
	app.get("/makeres", function(req, res) {
		return res.json(reservations);

	});
}

function displayResList(urlParts, req, res) {
	app.get("viewres", function(req, res) {
		return res.json(reservations);

	});
}

var serverOne = http.createServer(handleRequestOne);

// Starting our servers
serverOne.listen(PORT, function () {
	// Callback triggered when server is successfully listening. Hurray!
	console.log("Server listening on: http://localhost:" + PORT);
});
