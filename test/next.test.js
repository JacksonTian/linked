import next from '../lib/next.js';
import assert from 'assert';

describe('linked', function () {
  it('should ok', function () {
    var app = next();
    assert.strictEqual(app.stack.length, 0);
    app.use(function () {
      this.name = 'hehe';
    });
    assert.strictEqual(app.stack.length, 1);
    app.use(function () {
      this.age = 12;
    }, function () {
      this.gender = '男';
    });
    assert.strictEqual(app.stack.length, 3);
    var ctx = {};
    app.go(ctx);
    assert.strictEqual(ctx.name, 'hehe');
    assert.strictEqual(ctx.age, 12);
    assert.strictEqual(ctx.gender, '男');
    // 
    var ctx = {};
    app(ctx);
    assert.strictEqual(ctx.name, 'hehe');
    assert.strictEqual(ctx.age, 12);
    assert.strictEqual(ctx.gender, '男');
    app.use(function (next) {
      this.height = '170cm';
      next();
    });
    var ctx = {};
    app(ctx);
    assert.strictEqual(ctx.name, 'hehe');
    assert.strictEqual(ctx.age, 12);
    assert.strictEqual(ctx.gender, '男');
    assert.strictEqual(ctx.height, '170cm');
  });
});
