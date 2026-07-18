import { describe, it, expect } from 'vitest';
import express from 'express';
import request from 'supertest';
import { makeCreateUserHandler, type CreateUserUseCase } from '../src/03-infrastructure';

describe('makeCreateUserHandler', () => {
  it('delegates to the use case and returns 201', async () => {
    const fake: CreateUserUseCase = {
      execute: async (name) => ({ id: '42', name }),
    };
    const app = express();
    app.use(express.json());
    app.post('/users', makeCreateUserHandler(fake));
    const res = await request(app).post('/users').send({ name: 'ada' });
    expect(res.status).toBe(201);
    expect(res.body).toEqual({ id: '42', name: 'ada' });
  });
});
