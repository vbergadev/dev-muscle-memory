import { describe, it, expect } from 'vitest';
import { parseArgs } from '../src/01-argv-cli';

describe('parseArgs', () => {
  it('parses --key value pairs', () => {
    expect(parseArgs(['--name', 'Ada']).flags).toEqual({ name: 'Ada' });
  });

  it('treats a lone --flag as boolean true', () => {
    expect(parseArgs(['--verbose']).flags).toEqual({ verbose: true });
  });

  it('collects positionals under _', () => {
    const r = parseArgs(['build', '--out', 'dist', 'extra']);
    expect(r._).toEqual(['build', 'extra']);
    expect(r.flags).toEqual({ out: 'dist' });
  });
});
