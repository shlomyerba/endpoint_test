import request from 'supertest';
import app from '../src/app';

describe('GET /api/example', () => {
  it('should return a greeting', async () => {
    const response = await request(app).get('/api/example');
    expect(response.status).toBe(200);
    expect(response.body.message).toBe('Hello from the example endpoint!');
  });
});
