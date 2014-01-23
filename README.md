linked
======
## Installation

```bash
$ npm install linked
```

## Usage

```js
var linked = require('linked');
var app = linked();
app.use(function (ctx, next) {
  // step 1
  next();
}, function (ctx, next) {
  // step 2
  next();
}, function (ctx, next) {
  next();
});
// start execute.
app();
// or
app.go();
```

## License
The MIT License
