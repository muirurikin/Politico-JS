const { logger } = require('loggery');
const config = require('config');
const bodyParser = require('koa-bodyparser');

const PORT = config.get('PORT');

const app = require('./createApp')();

const office = require('../routes/office');

async function main() {
  try {
    await app.use(bodyParser());
    await app.use(office.middleware());
    await app.listen(PORT);
    logger().info(`Koa App Started on port ${PORT}`);
  } catch (err) {
    logger().error(err);
  }
}
main();