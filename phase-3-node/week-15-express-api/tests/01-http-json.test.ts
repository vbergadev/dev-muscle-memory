import { describe, it, expect } from 'vitest';
import request from 'supertest';
import { createApp } from '../src/01-http-json';

describe('GET /ping', () => {
  it('responds with pong', async () => {
    const res = await request(createApp()).get('/ping');
    expect(res.status).toBe(200);
    expect(res.body).toEqual({ message: 'pong' });
  });
});
