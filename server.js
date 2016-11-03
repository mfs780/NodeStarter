//ami-575bb937
const publicIP = require('public-ip');
var express = require('express');
var app = express();


app.get('/', function(req, res){
  var ip = publicIP.v4().then(ip => {
    res.send(ip);
  });
});

app.listen(3000, function(){
  console.log('Example app listening on port 3000!');
});