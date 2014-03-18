var linked = require('../');
var http = require('http');

var app = linked();
app.use(function () {
  this.res.writeHead(200, {'Content-Type': 'text/plain'});
  this.res.end('Hello world');
});

http.createServer(function (req, res) {
  var ctx = {req: req, res: res};
  app.go(ctx);
}).listen(8000);
