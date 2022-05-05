const FakeServer = require('fake-json-api-server/src/nodeServer');
const config = require('../book-store-frontend/src/config/endpoints.json');
const testData = require('../book-store-frontend/src/config/testdata.json');

new FakeServer({
  storageKey: 'fakeServerStorage',
  port: config.api.port,
  resources: testData,
});
