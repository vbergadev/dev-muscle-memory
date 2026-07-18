import { describe, it, expect } from 'vitest';
import express from 'express';
import request from 'supertest';
import { z } from 'zod';
import { validateBody } from '../src/04-zod-validation';

function appWith() {
  const app = express();
  app.use(express.json());
  app.post('/users', validateBody(z.object({ name: z.string().min(1) })), (_req, res) => {
    res.json({ ok: true });
  });
  return app;
}

describe('validateBody', () => {
  it('rejects an invalid body with 400', async () => {
    const res = await request(appWith()).post('/users').send({});
    expect(res.status).toBe(400);
  });

  it('passes a valid body through', async () => {
    const res = await request(appWith()).post('/users').send({ name: 'Ada' });
    expect(res.status).toBe(200);
    expect(res.body).toEqual({ ok: true });
  });
});
