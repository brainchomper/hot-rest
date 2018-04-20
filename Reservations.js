var http = require("http");
var fs = require("fs");
var mysql = require("mysql");
var bodyParser = require("body-parser");
var url = require("url");
var express = require("express");
var path = require("path");

var app = express();

var PORT = 3030;

var reservations = [];
var waitingList = [];

fillArr();

function fillArr() {
	connection.query("SELECT * FROM Reservations", function(err, data){
		for (let index = 0; index < data.length; index++) {
			var element = data[index];
			reservations.push(element);
			
		}
	})
}

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
	app.get("/viewres", function(req, res) {
		return res.json(reservations);

	});
}

// Create New Reservations - takes in JSON input
app.post("/makeres", function (req, res) {
	// req is an object. req.body is the "body" parameter of the req object.
	var newreservation = req.body;

	console.log(newreservation);

	connection.query("INSERT INTO Reservations SET ?",
newreservation, function (err, res){
	if (err) {
		throw err;
	}
})

	res.json(newreservation);
});

var serverOne = http.createServer(handleRequestOne);

// Starting our servers
serverOne.listen(PORT, function () {
	// Callback triggered when server is successfully listening. Hurray!
	console.log("Server listening on: http://localhost:" + PORT);
});