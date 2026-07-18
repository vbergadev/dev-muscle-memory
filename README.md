# dev-muscle-memory

Coding fluency is muscle memory: you build it, and if you stop using it, you lose it. **dev-muscle-memory** is a structured 24-week path (JS → TS → React → Node → full-stack, plus a parallel data structures & algorithms track based on Loiane Groner's book) where every exercise ships as a **failing test you make pass on your own, by hand**.

The one rule: any AI you use may **explain concepts and review your code — never implement it for you** (except Phase 4). In a workflow where AI writes most of the code, this is where you keep the fundamentals sharp.

> Read [`CLAUDE.md`](./CLAUDE.md) before asking any AI for help in this repo.

## Who it's for

- **Beginners** building the muscle for the first time — typing real solutions instead of copy-pasting them is how the concepts stick.
- **Experienced devs** knocking off the rust after months of AI-assisted work, getting the reps back in JS/TS/React/Node.

Either way: the goal isn't to finish fast, it's to **rebuild the reflexes**. Type everything.

## How it's organized

```
dev-muscle-memory/
├── phase-1-fundamentals/   weeks 01–05  · plain JS/TS
├── phase-2-react/          weeks 06–12  · React + Vite + TS
├── phase-3-node/           weeks 13–18  · Node + Express/Fastify + Postgres
├── phase-4-fullstack/      weeks 19–24  · full-stack project tying it all together
└── dsa/                    ch-01…15     · data structures & algorithms track
```

Each **week** is an independent pnpm workspace with its own `package.json`, `tsconfig.json`, tests, and `README.md`. Exercises ship as **stubs** (`throw new Error('not implemented')`); the tests are already written and **failing on purpose** — your job is to make them pass.

## Requirements

- Node >= 20
- pnpm >= 9 (`corepack enable` sets it up)
- Docker + Docker Compose (from week 16 on)

## How to run

```bash
pnpm install                 # install every workspace
pnpm test                    # run ALL tests (from the root)
pnpm typecheck               # type-check every workspace
pnpm lint                    # ESLint
pnpm format                  # Prettier
```

Run a single week:

```bash
pnpm --filter @dev-lab/week-01-js-fundamentals test
# or from inside the folder:
cd phase-1-fundamentals/week-01-js-fundamentals && pnpm test
```

Database (week 16+ and Phase 4):

```bash
cp .env.example .env
pnpm db:up                   # start Postgres via Docker
pnpm db:down                 # stop it
```

## How to open an exercise

1. Go into the week folder and read its `README.md`.
2. Open `src/NN-name.ts` — the header states the **Goal**, **Prerequisites**, **References**, and **Rules**.
3. Run the matching test in watch mode: `pnpm test:watch`, and make it pass.
4. Only reach for docs/StackOverflow after ~20 min on your own. **Never copy-paste code — type it.**

## Progress

- **Scaffold complete.** Every exercise week (01–18) and all 15 DSA chapters ship with stubs + failing tests. Just start coding.
- **Phase 4 (weeks 19–24)** is README-only by design — that's where you build the full-stack project (AI may assist there; see `CLAUDE.md`).

Happy studying. Type everything. 🎹
