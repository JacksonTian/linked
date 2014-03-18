var Next = function () {
  var app = function (ctx) {
    app.go(ctx);
  };

  app.stack = [];
  app.use = function () {
    for (var i = 0; i < arguments.length; i++) {
      this.stack.push(arguments[i]);
    }
    return this;
  };

  app.go = function (ctx) {
    var stack = this.stack;
    ctx = ctx || {};
    var currentIndex = 0;

    var next = function (err) {
      var current = stack[currentIndex++];
      if (current) {
        var len = current.length;
        // 类似mocha，直接同步执行
        if (len === 0) {
          current.call(ctx);
          next();
        } else {
          current.call(ctx, next);
        }
      }
    };
    next();
  };

  return app;
};

module.exports = Next;
