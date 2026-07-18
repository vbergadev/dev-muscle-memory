# Week 16 — Persistence (Postgres + Drizzle)

## Goal of the week
Persist data in Postgres with Drizzle. The schema and connection are provided (setup); your focus is writing the repository and a join query. Tests are integration tests — they run against a real Postgres.

## Concepts you should own by the end
- Local Postgres via Docker (`pnpm db:up`)
- Drizzle: typed insert/select/delete
- Joins and filters (`eq`, `innerJoin`)
- Dependency injection of the `db`

## Required reading
- https://sqlbolt.com/
- https://orm.drizzle.team/docs/overview
- https://orm.drizzle.team/docs/joins

## Exercises this week
1. `src/schema.ts` + `src/db.ts` — **provided setup** (read it, no need to implement)
2. `01-product-repo.ts` — `ProductRepository` (create/findAll/findById/deleteById)
3. `02-relations.ts` — `ordersForUser` (join orders → products)

## How to run
```bash
pnpm install          # (at the root, once)
pnpm test             # run this week's tests (failing on purpose)
pnpm test:watch       # watch mode while you implement
# tests use skipIf(!DATABASE_URL): run `pnpm db:up`, then DATABASE_URL=postgres://devlab:devlab@localhost:5432/devlab pnpm test
```

## Deliverable by end of week
Repository + join query passing against the Docker Postgres.

## Checkpoint
If you can't write an INNER JOIN in plain SQL, review SQLBolt first.
