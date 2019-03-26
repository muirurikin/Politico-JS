const Koa = require('koa');
const router = require('koa-router');
const config = require('./config/default');
const app = new Koa();
const route = new router();

let PORT = config.developmentConfig.PORT || 4000;

route.get('/', ctx => { ctx.body = 'Hello Koa'});

app.use(route.routes());
app.use(route.allowedMethods());

let server = app.listen(PORT);

