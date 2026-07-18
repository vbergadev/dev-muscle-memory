/**
 * Exercise: planRenames
 *
 * Goal: Given a list of filenames and a find/replace pair, return the rename plan: for every filename that contains `find`, an entry { from, to } where `to` replaces ALL occurrences of `find` with `replace`. Filenames that would not change are omitted.
 *
 * Prerequisites:
 *   - string replaceAll
 *   - mapping + filtering
 *   - keeping side effects (real fs.rename) OUT of the pure planner
 *
 * References:
 *   - https://nodejs.org/api/fs.html#fspromisesrenameoldpath-newpath
 *
 * Rules:
 *   - This function must be pure (no fs access) — it only computes the plan
 *
 * Time budget: ~18 minutes.
 */

export type Rename = { from: string; to: string };

export function planRenames(files: string[], find: string, replace: string): Rename[] {
  throw new Error('not implemented');
}
