var Next = function () {
  if (!(this instanceof Next)) {
    return new Next();
  }
  this.stack = [];
  this.ctx = {};
};

Next.prototype.use = function () {
  for (var i = 0; i < arguments.length; i++) {
    this.stack.push(arguments[i]);
  }
  return this;
};

Next.prototype.go = function () {
  this.currentIndex = -1;
  var that = this;
  var next = function () {
    that.currentIndex++;
    var current = that.stack[that.currentIndex];
    if (current) {
      current.call(null, that.ctx, next);
    }
  };
  next();
};

module.exports = Next;
