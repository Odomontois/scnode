var app = require('express').createServer();
var express = require('express');
app.get("/",function(req,res){
	res.render('hello');
});

app.get("/unit/:name", function(req,res){
	res.render('unit-attrs',{unit: {name : req.params.name}});
});

app.use("/styles", express.static(__dirname + '/../styles'));

module.exports = app