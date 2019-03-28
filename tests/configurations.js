const { expect } = require('./setup');
const config = require('config');

describe('configurations', () => {
  let port;
  let googleApiKey;
  let googleApiName;

  beforeEach(() => {
    port = config.get('port');
    googleApiKey = config.get('google.apiKey');
    googleApiName = config.get('google.userName');
  });

  describe('defaults', () => {
    it ('retrieves defaults env vars in test env', () => {
      expect(googleApiKey).to.eq('key');
      expect(googleApiName).to.eq('alexona');
      expect(googleApiName).to.eq('alexona');
    })
  });

  describe('test env', () => {
    it('gets test port', () => {
      expect(port).to.eq(3000);
    });
  });
});
