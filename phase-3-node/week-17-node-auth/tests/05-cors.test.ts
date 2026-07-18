import { describe, it, expect } from 'vitest';
import express from 'express';
import request from 'supertest';
import { createCors } from '../src/05-cors';

describe('createCors', () => {
  it('sets the allow-origin header', async () => {
    const app = express();
    app.use(createCors('https://example.com'));
    app.get('/', (_req, res) => {
      res.json({ ok: true });
    });
    const res = await request(app).get('/');
    expect(res.headers['access-control-allow-origin']).toBe('https://example.com');
  });
});
