const router = require('koa-joi-router');
const Joi = router.Joi;

const Office = require('../models/office');

const public = router();

public.get('/offices', async (ctx) => {
  ctx.body = Office.find();
});

public.post('/offices', async (ctx) => {
  const { name, type } = ctx.request.body;

  const office = {
    name,
    type,
  }
  Office.create(office);
  ctx.status = 201;
})

module.exports = public;
