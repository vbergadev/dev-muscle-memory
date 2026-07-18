import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    globals: true,
    environment: 'node',
    // Type-level exercises: the assertions live in *.test-d.ts and are checked
    // by tsc through Vitest's typecheck mode. A wrong type => a failing test.
    typecheck: {
      enabled: true,
      include: ['tests/**/*.test-d.ts'],
      tsconfig: './tsconfig.vitest.json',
    },
    passWithNoTests: true,
  },
});
