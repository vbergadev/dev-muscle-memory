import { describe, it, expect } from 'vitest';
import { planRenames } from '../src/03-batch-rename';

describe('planRenames', () => {
  it('plans renames for matching files', () => {
    expect(planRenames(['a-draft.txt', 'b-draft.md', 'c.txt'], 'draft', 'final')).toEqual([
      { from: 'a-draft.txt', to: 'a-final.txt' },
      { from: 'b-draft.md', to: 'b-final.md' },
    ]);
  });

  it('replaces all occurrences', () => {
    expect(planRenames(['x-x.txt'], 'x', 'y')).toEqual([{ from: 'x-x.txt', to: 'y-y.txt' }]);
  });

  it('omits files that would not change', () => {
    expect(planRenames(['keep.txt'], 'draft', 'final')).toEqual([]);
  });
});
