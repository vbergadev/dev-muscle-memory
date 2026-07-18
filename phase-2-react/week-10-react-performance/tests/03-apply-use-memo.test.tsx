import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { ExpensiveList } from '../src/exercises/03-apply-use-memo';

describe('ExpensiveList', () => {
  it('shows the memoized sum', () => {
    render(<ExpensiveList numbers={[1, 2, 3, 4]} />);
    expect(screen.getByTestId('sum')).toHaveTextContent('10');
  });
});
