# Week 18 — Architecture, testing, error handling

## Goal of the week
Apply Clean Architecture in Node: separate domain, application, and infrastructure, with typed errors and manual dependency injection. Test each layer in isolation.

## Concepts you should own by the end
- Layers: domain (rules) → application (use cases) → infrastructure (framework/db)
- Ports (interfaces) and dependency injection
- Typed errors and centralized HTTP mapping
- A simple DI container (lazy singletons)

## Required reading
- Branas — Software Engineering Formation
- Dev Eficiente — Architecture
- https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html

## Exercises this week
1. `01-domain.ts` — `Account` entity with invariants
2. `02-application.ts` — `CreateUser` use case (depends on a port)
3. `03-infrastructure.ts` — `makeCreateUserHandler` (Express adapter)
4. `04-errors.ts` — error hierarchy + `httpStatusFor`
5. `05-di-container.ts` — `createContainer` (manual DI)

## How to run
```bash
pnpm install          # (at the root, once)
pnpm test             # run this week's tests (failing on purpose)
pnpm test:watch       # watch mode while you implement
```

## Deliverable by end of week
A well-architected API with per-layer tests. Target: 80%+ coverage (`pnpm exec vitest run --coverage`).

## Checkpoint
If you can't say what may and may NOT live in the domain layer, review Clean Architecture.
