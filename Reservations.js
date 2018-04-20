var http = require("http");
var fs = require("fs");
var mysql = require("mysql");
var bodyParser = require("body-parser");
var url = require("url");
var express = require("express");

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
		case "/reservations":
			displayReservations(urlParts, req, res);
			break;
		case "/reslist":
			displayResList(urlParts, req, res);
			break;
		default:
			break;
	}
}

function displayRoot(urlParts, req, res) {
	fs.readFile(__dirname + "/index.html", "utf8", function (err, data) {

	});
}


function displayReservations(urlParts, req, res) {
	// we need to match the names of the html pages
	fs.readFile(__dirname + "/reservations.html", "utf8", function (err, data) {

	});
}

function displayResList(urlParts, req, res) {
	// we need to match the names of the html pages
	fs.readFile(__dirname + "/reslist.html", "utf8", function (err, data) {

	});
}

var serverOne = http.createServer(handleRequestOne);

// Starting our servers
serverOne.listen(PORT, function () {
	// Callback triggered when server is successfully listening. Hurray!
	console.log("Server listening on: http://localhost:" + PORT);
});
