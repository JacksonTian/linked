class App {
  constructor() {
    this.stack = [];
  }

  use(...middlewares) {
    this.stack.push(...middlewares);
    return this;
  }

  go(ctx) {
    ctx = ctx || {};
    let currentIndex = 0;
    const stack = this.stack;

    const next = (err) => {
      const current = stack[currentIndex++];
      if (current) {
        const len = current.length;
        if (len === 0) {
          current.call(ctx);
          next();
        } else {
          current.call(ctx, next);
        }
      }
    };
    next();
  }
}

var Next = function () {
  const app = new App();
  const handler = (ctx) => app.go(ctx);
  handler.stack = app.stack;
  handler.use = app.use.bind(app);
  handler.go = app.go.bind(app);
  return handler;
};

export default Next;
