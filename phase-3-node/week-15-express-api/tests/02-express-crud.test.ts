import { describe, it, expect } from 'vitest';
import request from 'supertest';
import { createApp } from '../src/02-express-crud';

describe('products CRUD', () => {
  it('creates, reads, and deletes a product', async () => {
    const app = createApp();
    const created = await request(app).post('/products').send({ name: 'Book', price: 10 });
    expect(created.status).toBe(201);
    expect(created.body).toMatchObject({ name: 'Book', price: 10 });
    expect(created.body.id).toBeDefined();

    const list = await request(app).get('/products');
    expect(list.body).toHaveLength(1);

    const one = await request(app).get(`/products/${created.body.id}`);
    expect(one.body).toMatchObject({ name: 'Book' });

    const del = await request(app).delete(`/products/${created.body.id}`);
    expect(del.status).toBe(204);

    const empty = await request(app).get('/products');
    expect(empty.body).toHaveLength(0);
  });

  it('returns 404 for a missing product', async () => {
    const res = await request(createApp()).get('/products/does-not-exist');
    expect(res.status).toBe(404);
  });
});
