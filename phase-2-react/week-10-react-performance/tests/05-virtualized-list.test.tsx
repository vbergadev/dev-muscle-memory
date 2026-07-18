import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { VirtualList } from '../src/exercises/05-virtualized-list';

describe('VirtualList', () => {
  it('renders only the visible window, not all items', () => {
    const items = Array.from({ length: 1000 }, (_, i) => `row ${i}`);
    render(<VirtualList items={items} height={100} itemHeight={20} />);
    const rows = screen.getAllByTestId('row');
    expect(rows.length).toBeGreaterThan(0);
    expect(rows.length).toBeLessThan(100); // nowhere near 1000
  });
});
