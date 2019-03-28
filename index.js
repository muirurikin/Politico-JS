const config = require('config');
const { logger } = require('loggery') // THIS IS MY OWN package ;)

const PORT = config.get('port');
const MONGO_URI = config.get('mongo.url');

console.log(process.env.GOOGLE_API_KEY);
// const GOOGLE_API_KEY = config.get('google.apiKey');

logger().info(`MongoDB uri is: ${MONGO_URI}`)
logger().info(`Server running on port: ${PORT}`);
