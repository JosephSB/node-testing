const request = require('supertest');

const createApp = require('../src/app');

describe('Test for hello endpoint', () => {
  let app = null;
  let server = null;
  beforeAll(() => {
    app = createApp();
    server = app.listen(3001);
  });

  afterAll(async () => {
    await server.close();
  });

  describe('Test for GET /', () => {
    test('Should return "hello world"', () => request(app)
      .get('/')
      .expect(200)
      .then((resp) => {
        expect(resp.text).toEqual('Hello World!');
      }));
  });
});
