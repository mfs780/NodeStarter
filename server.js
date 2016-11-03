var http = require('http');
var port = process.env.port || 81;
const publicIP = require('public-ip');

http.createServer(function(req, res){
  res.writeHead(200, {'Content-Type': 'text/plain'});
  var ip = publicIP.v4().then(ip => {
  res.end(ip);
  });
}).listen(port);