# Week 17 — Authentication, authorization, security

## Goal of the week
Implement full auth: password hashing with bcrypt, JWT (access/refresh), auth middleware, rate limiting, and CORS. All testable with Supertest.

## Concepts you should own by the end
- Salted password hashing (bcrypt) vs encryption
- JWT: signing and verifying; access vs refresh
- Auth middleware (Bearer token → req.user)
- Rate limiting (429) and CORS

## Required reading
- https://jwt.io/introduction
- https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS
- https://github.com/dcodeIO/bcrypt.js

## Exercises this week
1. `01-password-hash.ts` — `hashPassword` / `verifyPassword` (bcrypt)
2. `02-jwt.ts` — `signToken` / `verifyToken`
3. `03-auth-middleware.ts` — `requireAuth` (Bearer)
4. `04-rate-limit.ts` — `createRateLimiter` (429)
5. `05-cors.ts` — `createCors`

## How to run
```bash
pnpm install          # (at the root, once)
pnpm test             # run this week's tests (failing on purpose)
pnpm test:watch       # watch mode while you implement
```

## Deliverable by end of week
API with full auth (password + JWT + middleware) and green tests.

## Checkpoint
If you don't know why refresh tokens exist (and why the access token is short-lived), review.
