# Week 13 — Node runtime, modules, npm

## Goal of the week
Understand the Node runtime — argv, environment variables, a well-configured package.json — by building the blocks of a useful CLI (keeping pure logic and fs effects apart).

## Concepts you should own by the end
- `process.argv` and flag parsing
- `process.env` and reading `.env` without a lib
- ESM vs CJS, `package.json` (main, exports, types)
- Separating pure logic from effects (fs)

## Required reading
- https://nodejs.org/en/learn/getting-started/introduction-to-nodejs
- https://nodejs.org/en/learn/asynchronous-work/event-loop-timers-and-nexttick

## Exercises this week
1. `01-argv-cli.ts` — `parseArgs` (flags + positionals)
2. `02-env-loader.ts` — `parseEnv` (a `.env` parser without dotenv)
3. `03-batch-rename.ts` — `planRenames` (pure batch-rename planner)

## How to run
```bash
pnpm install          # (at the root, once)
pnpm test             # run this week's tests (failing on purpose)
pnpm test:watch       # watch mode while you implement
```

## Deliverable by end of week
The 3 blocks with green tests. Then build the real batch-rename CLI by wiring `planRenames` to `fs.promises.rename`.

## Checkpoint
If you don't see why separating `planRenames` (pure) from `fs.rename` (effect) makes testing easier, review.
