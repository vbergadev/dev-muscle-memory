import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { BigList } from '../src/exercises/01-big-list';

describe('BigList', () => {
  it('renders every item', () => {
    const items = Array.from({ length: 50 }, (_, i) => `item ${i}`);
    render(<BigList items={items} />);
    expect(screen.getAllByRole('listitem')).toHaveLength(50);
  });
});
