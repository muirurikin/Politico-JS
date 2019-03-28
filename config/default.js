module.exports = {
  // say you're going to integrate google api
  // since these are to be shared across all envs, do not specify any NODE_ENV here!!!
  google: {
    apiKey: process.env.GOOGLE_API_KEY,
    userName: process.env.GOOGLE_API_NAME,
  },
};
