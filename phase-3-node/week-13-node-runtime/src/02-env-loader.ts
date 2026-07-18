/**
 * Exercise: parseEnv
 *
 * Goal: Parse the text of a .env file into a Record<string, string>. Each non-empty, non-comment line is `KEY=VALUE`. Ignore blank lines and lines starting with `#`. Trim whitespace around key and value; surrounding quotes on the value should be stripped.
 *
 * Prerequisites:
 *   - splitting text into lines
 *   - splitting on the first "="
 *   - trimming and stripping quotes
 *
 * References:
 *   - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
 *
 * Rules:
 *   - Do not use the dotenv library — parse it yourself
 *
 * Time budget: ~20 minutes.
 */

export function parseEnv(content: string): Record<string, string> {
  throw new Error('not implemented');
}
