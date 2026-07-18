import { describe, it, expect } from 'vitest';
import { createPluginSystem } from '../src/05-plugin-system';

describe('05-plugin-system', () => {
  it('runs plugins in order', () => {
    const sys = createPluginSystem();
    sys.use((s) => s + 'a');
    sys.use((s) => s + 'b');
    expect(sys.run('x')).toBe('xab');
  });

  it('returns input unchanged with no plugins', () => {
    const sys = createPluginSystem();
    expect(sys.run('hello')).toBe('hello');
  });
});
