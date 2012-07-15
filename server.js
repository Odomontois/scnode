var http = require('http');

var ipaddr  = process.env.OPENSHIFT_INTERNAL_IP || "127.0.0.1";
var port    = process.env.OPENSHIFT_INTERNAL_PORT || 8080;

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello Bro!!!\n');
}).listen(port, ipaddr);

console.log("Server running at http://" + ipaddr + ":" + port + "/");