const Koa = require('koa');
const { logger } = require('loggery');


function createApp() {
  try {
    const app = new Koa();
    return app;

  } catch (err) {
    logger().error(err);
  }
}

module.exports = createApp;

