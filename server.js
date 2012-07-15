var app = require('express').createServer();

var ipaddr  = process.env.OPENSHIFT_INTERNAL_IP || "127.0.0.1";
var port    = process.env.OPENSHIFT_INTERNAL_PORT || 8080;

app.get("/",function(req,res){
	res.render('hello');
});

app.set('views',__dirname +'/views');
app.set('view engine','jade');

app.listen(port,ipaddr, function(){
  console.log("server listening on %d in %s mode", port, app.settings.env);
});