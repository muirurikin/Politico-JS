const router = require('koa-joi-router');
const Joi = router.Joi;

const Office = require('../models/office');

const public = router();

public.get('/offices', async (ctx) => {
  ctx.body = Office.find()
});
 
// public.route({
//   method: 'get',
//   path: '/offices',
//   validate: {
//     body: {
//       name: Joi.string().max(100),
//       type: Joi.string().max(100),
//     },
//     type: 'form',
//     output: {
//       200: {
//         body: {
//           userId: Joi.string(),
//           name: Joi.string()
//         }
//       }
//     }
//   },
//   handler: async (ctx) => {
//     const user = await createUser(ctx.request.body);
//     ctx.status = 201;
//     ctx.body = user;
//   }
// });

module.exports = public;