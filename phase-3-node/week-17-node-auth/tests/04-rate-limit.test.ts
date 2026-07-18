import { describe, it, expect } from 'vitest';
import express from 'express';
import request from 'supertest';
import { createRateLimiter } from '../src/04-rate-limit';

describe('createRateLimiter', () => {
  it('blocks after the limit with 429', async () => {
    const app = express();
    app.use(createRateLimiter({ max: 2, windowMs: 60_000 }));
    app.get('/', (_req, res) => {
      res.json({ ok: true });
    });
    expect((await request(app).get('/')).status).toBe(200);
    expect((await request(app).get('/')).status).toBe(200);
    expect((await request(app).get('/')).status).toBe(429);
  });
});
