var koa = require('koa'),
    serve = require('koa-static');

var paths = require('./tasks/paths');

var app = koa();
var root = paths.build.WWW,
    opts = {};

app.use(serve(root, opts));

app.listen(9966);
console.log('serving at http://localhost:9966');
