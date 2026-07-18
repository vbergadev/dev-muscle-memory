import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { ItemList } from '../src/exercises/07-list-with-key';

describe('ItemList', () => {
  it('renders one list item per entry', () => {
    render(
      <ItemList
        items={[
          { id: 1, label: 'alpha' },
          { id: 2, label: 'beta' },
          { id: 3, label: 'gamma' },
        ]}
      />,
    );
    expect(screen.getAllByRole('listitem')).toHaveLength(3);
    expect(screen.getByText('beta')).toBeInTheDocument();
  });
});
