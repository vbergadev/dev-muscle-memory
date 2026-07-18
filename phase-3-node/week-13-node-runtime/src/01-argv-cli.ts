/**
 * Exercise: parseArgs
 *
 * Goal: Parse a CLI argv array (without the node/script prefixes) into { _: positionals; flags }. `--key value` -> flags.key = "value"; `--flag` (followed by another --x or end) -> flags.flag = true; anything else is a positional in `_`.
 *
 * Prerequisites:
 *   - iterating process.argv-style arrays
 *   - distinguishing flags from values
 *   - building a record
 *
 * References:
 *   - https://nodejs.org/api/process.html#processargv
 *
 * Time budget: ~20 minutes.
 */

export type ParsedArgs = { _: string[]; flags: Record<string, string | boolean> };

export function parseArgs(argv: string[]): ParsedArgs {
  throw new Error('not implemented');
}
