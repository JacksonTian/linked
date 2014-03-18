linked
======
Tiny execution framework
## Installation

```bash
$ npm install linked
```

## Usage

```js
var linked = require('linked');
var app = linked();
app.use(function (next) {
  // step 1
  // async, need call next
  next();
}, function () {
  // step 2
  this.name = 'Jackson Tian';
}, function () {
  // step 3
  console.log(this.name);
});
// start execute.
app();
// or
app.go();

// or pass in context
var ctx = {};
app.use(function () {
  console.log(ctx.name);
});
app.go(ctx);
```

Advanced example:

```
var app = linked();
app.use(function () {
  this.res.writeHead(200, {'Content-Type': 'text/plain'});
  this.res.end('Hello world');
});
http.createServer(function (req, res) {
  var ctx = {req: req, res: res};
  app.go(ctx);
}).listen(8000);
```

## License
The MIT License
