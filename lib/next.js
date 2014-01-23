var Next = function () {
  var app = function () {
    app.go();
  };

  app.stack = [];
  app.use = function () {
    for (var i = 0; i < arguments.length; i++) {
      this.stack.push(arguments[i]);
    }
    return this;
  };

  app.go = function () {
    var stack = this.stack;
    var ctx = this.ctx;
    var currentIndex = 0;

    var next = function (err) {
      var current = stack[currentIndex++];
      if (current) {
        current.call(null, ctx, next);
      }
    };
    next();
  };

  return app;
};

module.exports = Next;
