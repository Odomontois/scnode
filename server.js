var app = require('express').createServer();

var ipaddr  = process.env.OPENSHIFT_INTERNAL_IP || "127.0.0.1";
var port    = process.env.OPENSHIFT_INTERNAL_PORT || 8080;

app.get("/",function(req,res){
	res.send('Hello Bro!!!\n');
})

app.listen(port)
console.log("server is running at port " + port)