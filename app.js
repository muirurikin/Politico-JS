const Koa = require('koa');
const router = require('koa-router');
const config = require('config');
const app = new Koa();
const route = new router();

let PORT = config.get('PORT');

route.get('/', ctx => { ctx.body = 'Hello Koa'});

app.use(route.routes());
app.use(route.allowedMethods());

let server = app.listen(PORT, () => {
  console.log(`Koa app started on port ${PORT}`)
});


