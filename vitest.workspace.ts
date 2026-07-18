/**
 * Vitest workspace — `pnpm test` at the root runs every week's suite.
 * Points at each workspace's config file (vite.config.ts for React weeks,
 * vitest.config.ts otherwise) so it won't try to load the README.md files.
 */
export default [
  'phase-1-fundamentals/*/vitest.config.ts',
  'phase-2-react/*/vite.config.ts',
  'phase-3-node/*/vitest.config.ts',
  'dsa/*/vitest.config.ts',
];
