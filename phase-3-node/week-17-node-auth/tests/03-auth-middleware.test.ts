import { describe, it, expect } from 'vitest';
import express from 'express';
import request from 'supertest';
import jwt from 'jsonwebtoken';
import { requireAuth } from '../src/03-auth-middleware';

function app() {
  const a = express();
  a.get('/private', requireAuth('sekret'), (_req, res) => {
    res.json({ ok: true });
  });
  return a;
}

describe('requireAuth', () => {
  it('rejects requests without a token', async () => {
    const res = await request(app()).get('/private');
    expect(res.status).toBe(401);
  });

  it('allows requests with a valid token', async () => {
    const token = jwt.sign({ sub: 'ada' }, 'sekret');
    const res = await request(app()).get('/private').set('Authorization', `Bearer ${token}`);
    expect(res.status).toBe(200);
  });
});
