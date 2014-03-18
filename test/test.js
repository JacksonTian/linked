var next = require('../');
var should = require('should');

describe('linked', function () {
  it('should ok', function () {
    var app = next();
    app.stack.should.have.length(0);
    app.use(function () {
      this.name = 'hehe';
    });
    app.stack.should.have.length(1);
    app.use(function () {
      this.age = 12;
    }, function () {
      this.gender = '男';
    });
    app.stack.should.have.length(3);
    var ctx = {};
    app.go(ctx);
    ctx.should.have.property('name', 'hehe');
    ctx.should.have.property('age', 12);
    ctx.should.have.property('gender', '男');
    // 
    var ctx = {};
    app(ctx);
    ctx.should.have.property('name', 'hehe');
    ctx.should.have.property('age', 12);
    ctx.should.have.property('gender', '男');
    app.use(function (next) {
      this.height = '170cm';
      next();
    });
    var ctx = {};
    app(ctx);
    ctx.should.have.property('name', 'hehe');
    ctx.should.have.property('age', 12);
    ctx.should.have.property('gender', '男');
    ctx.should.have.property('height', '170cm');
  });
});
