const app = require('./index')();

app.use(async ctx => {
  ctx.body = 'Hello World';
});

console.log(app);