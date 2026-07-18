# Week 14 — File system, streams, buffers

## Goal of the week
Master streams and buffers by processing data without loading everything into memory: transforms, consuming streams, and incremental parsing (the classic split-lines-across-chunks problem).

## Concepts you should own by the end
- Readable / Writable / Transform streams
- Object mode and `_transform` / `_flush`
- Buffers and `Buffer.byteLength`
- Backpressure and why streams matter for large files

## Required reading
- https://nodejs.org/api/stream.html
- https://nodejs.org/api/buffer.html

## Exercises this week
1. `01-uppercase-transform.ts` — `createUppercaseTransform` (Transform)
2. `02-count-bytes.ts` — `countBytes` (consume a stream)
3. `03-parse-csv.ts` — `parseCsv` (pure parser)
4. `04-line-splitter.ts` — `createLineSplitter` (object-mode Transform with partial-line buffering)

## How to run
```bash
pnpm install          # (at the root, once)
pnpm test             # run this week's tests (failing on purpose)
pnpm test:watch       # watch mode while you implement
```

## Deliverable by end of week
The 4 utilities with green tests. Then wire them into an end-to-end CSV parser over streams.

## Checkpoint
If you can't explain why `_flush` is needed in the line splitter, review.
