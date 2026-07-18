import { describe, it, expect } from 'vitest';
import { parseEnv } from '../src/02-env-loader';

describe('parseEnv', () => {
  it('parses key=value lines', () => {
    expect(parseEnv('PORT=3000\nHOST=localhost')).toEqual({ PORT: '3000', HOST: 'localhost' });
  });

  it('ignores comments and blank lines', () => {
    expect(parseEnv('# a comment\n\nDEBUG=true')).toEqual({ DEBUG: 'true' });
  });

  it('strips surrounding quotes and trims', () => {
    expect(parseEnv('NAME = "Ada Lovelace" ')).toEqual({ NAME: 'Ada Lovelace' });
  });
});
