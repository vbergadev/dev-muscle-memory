import { describe, it, expect } from 'vitest';
import { parseCsv } from '../src/03-parse-csv';

describe('parseCsv', () => {
  it('parses rows keyed by header', () => {
    expect(parseCsv('name,age\nAda,36\nBob,40')).toEqual([
      { name: 'Ada', age: '36' },
      { name: 'Bob', age: '40' },
    ]);
  });

  it('ignores a trailing newline', () => {
    expect(parseCsv('a,b\n1,2\n')).toEqual([{ a: '1', b: '2' }]);
  });
});
