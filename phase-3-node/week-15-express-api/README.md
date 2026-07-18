# Week 15 — HTTP and Express + Zod

## Goal of the week
Build a complete in-memory REST API with Express: routes, correct status codes, custom middleware, and Zod validation. All tested with Supertest.

## Concepts you should own by the end
- Routes, params, and `req.body` in Express
- Status codes (200/201/204/404/400)
- Middleware (req, res, next) and middleware factories
- Validation with Zod (`safeParse`)

## Required reading
- https://expressjs.com/en/guide/routing.html
- https://zod.dev/
- https://github.com/ladjs/supertest

## Exercises this week
1. `01-http-json.ts` — `createApp` with GET /ping
2. `02-express-crud.ts` — `createApp` with in-memory products CRUD
3. `03-logging-middleware.ts` — `createRequestLogger` (injectable middleware)
4. `04-zod-validation.ts` — `validateBody` (Zod validation middleware)

## How to run
```bash
pnpm install          # (at the root, once)
pnpm test             # run this week's tests (failing on purpose)
pnpm test:watch       # watch mode while you implement
```

## Deliverable by end of week
In-memory REST API with green Supertest tests.

## Checkpoint
If you don't know the order middlewares run in or when to call `next()`, review.
