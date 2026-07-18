import { describe, it, expect } from 'vitest';
import express from 'express';
import request from 'supertest';
import { createRequestLogger } from '../src/03-logging-middleware';

describe('createRequestLogger', () => {
  it('logs the method and path of each request', async () => {
    const logs: string[] = [];
    const app = express();
    app.use(createRequestLogger((line) => logs.push(line)));
    app.get('/hello', (_req, res) => {
      res.json({ ok: true });
    });
    await request(app).get('/hello');
    expect(logs.some((l) => l.includes('GET') && l.includes('/hello'))).toBe(true);
  });
});
