# Phase 4 — Full-stack project tying it all together (weeks 19–24)

**Goal:** build a serious project integrating React + Node + Postgres. Here AI **is allowed again** — with a rule: you plan and write the skeleton, AI speeds up boilerplate and reviews. See the exception in the root `CLAUDE.md`.

| Week | Folder | Focus |
|---|---|---|
| 19 | `week-19-setup` | Project definition + monorepo setup |
| 20 | `week-20-backend-core` | Domain, migrations, use cases, auth |
| 21 | `week-21-frontend-core` | Router, auth flow, design system, CRUD |
| 22 | `week-22-features` | Real-time, optimistic updates, offline, E2E |
| 23 | `week-23-quality` | A11y, Web Vitals, UI states, coverage |
| 24 | `week-24-polish` | README, tech article, deploy, demo |

> Unlike phases 1–3, these folders have **no exercise stubs**. Each `week-NN/README.md` describes the goal and deliverable — the project is yours, from scratch.

You build the project monorepo (`apps/web` + `apps/api` + `packages/shared`) in week 19. The root `docker-compose.yml` and `docker/api.Dockerfile` are your starting point for Postgres and containerizing the API.
