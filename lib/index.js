const { logger } = require('loggery');
const config = require('config');

const PORT = config.get('PORT');

const app = require('./createApp')();

async function main() {
  try {
    await app.listen(PORT);
    logger().info(`Koa App Started on port ${PORT}`);
  } catch (err) {
    logger().error(err);
  }
}
