/**
 * Exercise: createPluginSystem
 *
 * Goal: Return a tiny plugin system: `use` registers a transform plugin, `run` pipes the input string through every registered plugin in registration order and returns the final result.
 *
 * Prerequisites:
 *   - storing an ordered list of plugins
 *   - function composition / reducing over transforms
 *
 * References:
 *   - https://javascript.info/mixins
 *
 * Time budget: ~15 minutes.
 */

export function createPluginSystem(): { use: (plugin: (input: string) => string) => void; run: (input: string) => string } {
  throw new Error('not implemented');
}
